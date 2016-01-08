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

  // document.getElementById('boxx').addEventListener('click', function(){
  //   console.log("yes");
  //   var box =document.getElementById('boxx')
  //   if (box.style.backgroundColor !== 'lime') {
  //     box.style.backgroundColor = 'lime';
  //     box.className = 'box2';
  //   }
  //   else {
  //     box.style.backgroundColor = 'blue';
  //   box.className = 'box';
  // }
  // })


})
