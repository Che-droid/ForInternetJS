function multipTable(){
    var div= document.getElementById("multipDiv");
    div.innerHTML="<table id=\"table\"><tbody id=\"tableBody\">";

    var table=document.getElementById("table");
    table.style.border="3px solid green";
    table.style.backgroundColor="red";

    for (var x = 1; x <= 10; x++) {
        document.getElementById("tableBody").innerHTML+="<tr id=\"" + x + "\">";
        for (var z = 1; z <= 10; z++){
            var element=document.getElementById(x);
            if(x==1 || z==1)
                element.innerHTML+="<td><b>" + (x * z) + "<\/b><\/td>";
            else
                element.innerHTML+="<td>" + (x * z) + "<\/td>";
            element.style.backgroundColor="yellow";
        }
        document.getElementById("tableBody").innerHTML+="<\/tr>";
    }
    div.innerHTML+="<\/tbody><\/table>";
}