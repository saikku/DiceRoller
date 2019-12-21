//Copyright (c) 2019 by Jacob Schaefer (https://codepen.io/Pyremell/pen/eZGGXX)
    //Dice12
var dice12 = {
    sides: 12,
    roll12: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}
//Prints dice roll to the page
function printNumber12(number12) {
    var placeholder12 = document.getElementById('placeholder12');
    placeholder12.innerHTML = number12;
}

var button12 = document.getElementById('button12');
button12.onclick = function () {
    var result12 = dice12.roll12();
    printNumber12(result12);
};  //Dice12