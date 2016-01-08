'use strict'
console.log('working')


document.addEventListener('DOMContentLoaded', function (){
var currentDisplay = 0;
var currentOperator = '';
var totalHistory = [];
var lastInput = 0;
var catHolder = [];
var numberButtons = document.getElementsByClassName('num');
for(var i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', numberClicked);
}
function numberClicked(event) {
  var button = event.target.innerHTML;
  catHolder.push(button);
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

    currentDisplay= eval(answer);
    totalHistory.push(currentDisplay);
    document.getElementById('display').innerHTML = currentDisplay;
        break;
    case '+':
    lastInput = parseFloat(currentDisplay);
    currentOperator = '+';
    catHolder = [];
    currentDisplay = 0;
    document.getElementById('display').innerHTML = currentDisplay;
        break;
    case '-':
    lastInput = parseFloat(currentDisplay);
    currentOperator = '-';
    catHolder = [];
    currentDisplay = 0;
    document.getElementById('display').innerHTML = currentDisplay;
        break;
    case 'X':
    lastInput = parseFloat(currentDisplay);
     currentOperator = '*';
    catHolder = [];
    currentDisplay = 0;
    document.getElementById('display').innerHTML = currentDisplay;
        break;
    case '/':
    lastInput = parseFloat(currentDisplay);
    currentOperator = '/';
    catHolder = [];
    currentDisplay = 0;
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
        currentDisplay = 0;
        document.getElementById('display').innerHTML = currentDisplay;
        break;
    case 'History':
    console.log(totalHistory);
        catHolder = [];
        for (var i = 0; i < totalHistory.length; i ++) {
          currentDisplay = totalHistory[i + 1];
        }
        document.getElementById('display').innerHTML = currentDisplay;
}
}
})
