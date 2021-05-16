function task1(){
    let firstNum=prompt("Please enter first positive integer:","");
    firstNum=parseInt(firstNum);
    if(firstNum<1)
    {
        alert("First number must be positive integer");
        return;
    }

    let secondNum=prompt("Please enter second positive integer:","");
    secondNum=parseInt(secondNum);
    if(secondNum<1)
    {
        alert("Second number must be positive integer");
        return;
    }

    let result=0;
    for(let i=Math.min(firstNum,secondNum); i<=Math.max(firstNum,secondNum); i++)
    {
        if(i%2!=0)
            result+=i;
    }

    alert("Result: "+result);
}

function task2(){
    let name=prompt("Please enter your name:","");
    
    if ((name == null) || (name == ""))
    {
        alert ("Name cannot be empty!");
        return;
    }

    let mark = 0;

    mark += confirm ("JavaScript регістрозалежна мова");

    mark += !confirm ("Для розділення операторів використовується роздільник \".\"");

    mark += !confirm ("При завданні блоку операторів використовують фігурні дужки \"[]\"");

    mark += confirm ("Привласнення значень проводиться за допомогою оператора привласнення \"=\"");

    mark += !confirm ("Однорядковий коментарій ставиться за допомогою символів \"##\"");

    alert(name+"`s result is: " + mark);
}