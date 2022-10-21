
var isResultDone = 0;

 function displayValue(control)
 {
    //alert(control.value);
    if (isResultDone == 0)
    {
        document.getElementById("display").value += control.value
    }
    else
    {
        document.getElementById("display").value = control.value
        isResultDone = 0;
    }
 }
 function clearAll()
 {
    document.getElementById("display").value = '';
 }

 function result()
 {
    document.getElementById("display").value = eval(document.getElementById("display").value);
    isResultDone = 1;
 }
 function colorchange()
 {
    var mainDiv = document.getElementById("wrap");
     if (mainDiv.style.background === 'red') {
          mainDiv.style.background = "transparent";
     }
     else {
        mainDiv.style.background = "red";  
     }


    console.log(color);
 }

	 
