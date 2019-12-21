//Copyright (c) 2019 by Jacob Schaefer (https://codepen.io/Pyremell/pen/eZGGXX)
//Dice8
var dice8 = {
    sides: 8,
    roll8: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}
//Prints dice roll to the page
function printNumber8(number8) {
    var placeholder8 = document.getElementById('placeholder8');
    placeholder8.innerHTML = number8;
}

var button8 = document.getElementById('button8');
button8.onclick = function () {
    var result8 = dice8.roll8();
    printNumber8(result8);
};//Dice20