'use strict'
console.log('working')


document.addEventListener('DOMContentLoaded', function (){
var currentDisplay = "0";
var currentOperator = '';
var totalHistory = [];
var lastInput = 0;
var stringMath = [];
var catHolder = [];
var theDot = false;
var theX = false;
var answer = 0;
var numberButtons = document.getElementsByClassName('num');
for(var i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', numberClicked);
}
function numberClicked(event) {
  var button = event.target.innerHTML;
  if (currentDisplay === '0' && button === '0'){
    return;
  }
  if (theDot == true && button === '.') {
    return;
  }
  else if ((currentDisplay === '0' || currentDisplay === lastInput || answer === 0) && button === '.') {
    catHolder.push("0"+button);
    theDot = true;
  }
  else{ catHolder.push(button)}
  currentDisplay = catHolder.join('')
document.getElementById('display').innerHTML = currentDisplay;
}

var operatorButtons = document.getElementsByClassName('operator');
for(var i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', operatorClicked);
}

function operatorClicked(event) {
  var button = event.target.innerHTML;
  switch (button) {
    case '=':
    catHolder = [];
    if (currentOperator === "+"){
      answer = parseFloat(lastInput) + parseFloat(currentDisplay);
    }
    if (currentOperator === "-"){
      answer = parseFloat(lastInput) - parseFloat(currentDisplay);
    }
    if (currentOperator === "X"){
       var answer = parseFloat(lastInput) * parseFloat(currentDisplay);
    }
    if (currentOperator === "/"){
      answer = parseFloat(lastInput) / parseFloat(currentDisplay);
    }
    currentDisplay = answer;
    totalHistory.push(currentDisplay);
    document.getElementById('display').innerHTML = currentDisplay;
    answer = 0;
    lastInput= 0;
        break;
    case '+':
     answer = parseFloat(lastInput) + parseFloat(currentDisplay);
      lastInput = answer;
      currentOperator = '+';
      catHolder = [];
      theDot = false;
      currentDisplay = answer;
      document.getElementById('display').innerHTML = currentDisplay;
      answer = 0;
        break;
    case '-':
   answer = (parseFloat(lastInput) - parseFloat(currentDisplay))*-1;
      lastInput = answer;
    currentOperator = '-';
    catHolder = [];
    theDot = false;
    currentDisplay = answer;
    document.getElementById('display').innerHTML = currentDisplay;
    answer = 0;
        break;
    case 'X':
    if (theX === false){
      lastInput = 1;
      theX = true;
    }
    answer = parseFloat(lastInput) * parseFloat(currentDisplay);
      lastInput = answer;
     currentOperator = 'X';
     theDot = false;
    catHolder = [];
    currentDisplay = answer;
    document.getElementById('display').innerHTML = currentDisplay;
    answer = 0;
        break;
    case '/':
    if (theX === false){
      answer = parseFloat(currentDisplay)
      theX = true;
    }
    else{
     answer = parseFloat(lastInput) / parseFloat(currentDisplay);
    }
    lastInput = answer;
    currentOperator = '/';
    catHolder = [];
    theDot = false;
    currentDisplay = answer;
    document.getElementById('display').innerHTML = currentDisplay;
    answer = 0;
        break;
    case '%':
        currentDisplay = parseFloat(currentDisplay)/100;
        document.getElementById('display').innerHTML = currentDisplay;
        break;
    case '+ or -':
    currentDisplay = parseFloat(currentDisplay)*-1;
    document.getElementById('display').innerHTML = currentDisplay;
        break;
    case 'C':
        catHolder = [];
        currentDisplay = '0';
        theDot = false;
        theX = false;
        answer = 0;
        document.getElementById('display').innerHTML = currentDisplay;
        currentDisplay = document.getElementById('display').innerHTML;
        break;
    case 'History':
    console.log(totalHistory);
        catHolder = [];
        totalHistory.length === 0 ? currentDisplay = "No History" :
        currentDisplay = totalHistory;
        document.getElementById('display').innerHTML = currentDisplay;
}
}
})
