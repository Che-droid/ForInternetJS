    const TESTS =
[
	["JavaScript регістрозалежна мова", true],
	["Для розділення операторів використовується роздільник \".\"", false],
	["При завданні блоку операторів використовують фігурні дужки \"[]\"", false],
	["Привласнення значень проводиться за допомогою оператора привласнення \"=\"", true],
	["Однорядковий коментарій ставиться за допомогою символів \"##\"", false],
]

const TIME_LIMIT = 20;

window.name="";
window.curTest = 0;
window.mark = 0;
window.timeLeft = 0;

function updateTestForm (){
	document.getElementById ("modifiedLab1Div").innerHTML = "<p><b>" + TESTS[window.curTest][0] 
		+ "</b></p><p>Time left: <span id=\"counter\">20</span> seconds</p><button onclick=\"answer (true)\">Yes</button><button onclick=\"answer (false)\">No</button>";
}

function answer (data){
	mark += ((data === TESTS[curTest][1]) && (timeLeft > 0));
	curTest++;
	
	if (curTest == TESTS.length){
		alert (window.name+"`s result is: " + mark);
		document.getElementById ("testForm").innerHTML = "";
		clearTimeout (window.timer);
	} 
    else{
		timeLeft = TIME_LIMIT;
		updateTestForm ();
	}
}

function timerTick (){
	timeLeft--;
	if (timeLeft == 0){
		answer (null);
	}

	document.getElementById ("counter").innerHTML = timeLeft;
	window.timer = setTimeout (timerTick, 1000);
}

function modifiedLab1 (){
	window.name=prompt("Please enter your name:","");
    
    if ((window.name == null) || (window.name == ""))
    {
        alert ("Name cannot be empty!");
        return;
    }

	curTest = 0;
	mark = 0;
	timeLeft = TIME_LIMIT;
	
	updateTestForm ();
	timerTick ();
}