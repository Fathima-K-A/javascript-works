var pointFrequency=1;


function displayNumber(event){

    const operators=["+","-","*","/","."]

    let textbox=document.querySelector("#result")
    
    // extract currentExpression
    let currentExpression=textbox.value;
    
    // extracr displayNumber
    let displayNumber=event.target.value;

    if (displayNumber== "." && pointFrequency==1){

        pointFrequency=0
    }
    else if(displayNumber== "." && pointFrequency==0){

        return

    }
    if (operators.includes(displayNumber) && displayNumber!="."){

        pointFrequency=1
    }

    let curExpLastChar=currentExpression.slice(-1)

    // check for displayNumber and curExpLastChar are operators

    if(operators.includes(displayNumber) && operators.includes(curExpLastChar)){

        // remove the last character from currentExpression
        currentExpression=currentExpression.slice(0,-1)
    }

    // append the displayNumber with currentExpression

    textbox.value=currentExpression+displayNumber

   
}


function clearBox(){

    document.querySelector("#result").value=""
}


function evaluateExpression(){

    let currentExpression=document.querySelector("#result").value;

    let result=eval(currentExpression)

    document.querySelector("#result").value=result

    pointFrequency=1
}


function backSpace(){

    let currentExpression=document.querySelector("#result").value;

    let result=currentExpression.slice(0,-1)
    
    document.querySelector("#result").value=result
}