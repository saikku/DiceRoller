//Copyright (c) 2019 by Jacob Schaefer (https://codepen.io/Pyremell/pen/eZGGXX)
    //Dice6
var dice6 = {
    sides: 6,
    roll6: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
}
  //Prints dice roll to the page
function printNumber(number6) {
    var placeholder6 = document.getElementById('placeholder6');
    placeholder6.innerHTML = number6;
}

var button6 = document.getElementById('button6');
button6.onclick = function() {
    var result6 = dice6.roll6();
    printNumber(result6);
};  //Dice6