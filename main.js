'use strict'
console.log('working')


document.addEventListener('DOMContentLoaded', function (){
var currentDisplay = "0";
var currentOperator = '';
var totalHistory = [];
var lastInput = 0;
var catHolder = [];
var theDot = false;
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
  else if ((currentDisplay === '0' || currentDisplay === lastInput) && button === '.') {
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
    var answer = parseFloat(lastInput)+currentOperator+parseFloat(currentDisplay);
    currentDisplay = eval(answer);
    totalHistory.push(currentDisplay);
    document.getElementById('display').innerHTML = currentDisplay;
        break;
    case '+':
    lastInput = parseFloat(currentDisplay);
    currentOperator = '+';
    catHolder = [];
    theDot = false;
    currentDisplay = lastInput;
    document.getElementById('display').innerHTML = currentDisplay;
        break;
    case '-':
    lastInput = parseFloat(currentDisplay);
    currentOperator = '-';
    catHolder = [];
    theDot = false;
    currentDisplay = lastInput;
    document.getElementById('display').innerHTML = currentDisplay;
        break;
    case 'X':
    lastInput = parseFloat(currentDisplay);
     currentOperator = '*';
     theDot = false;
    catHolder = [];
    currentDisplay = lastInput;
    document.getElementById('display').innerHTML = currentDisplay;
        break;
    case '/':
    lastInput = parseFloat(currentDisplay);
    currentOperator = '/';
    catHolder = [];
    theDot = false;
    currentDisplay = lastInput;
    document.getElementById('display').innerHTML = currentDisplay;
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
