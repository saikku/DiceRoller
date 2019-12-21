//Copyright (c) 2019 by Jacob Schaefer (https://codepen.io/Pyremell/pen/eZGGXX)
    //Dice100
var dice100 = {
    sides: 100,
    roll100: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}
//Prints dice roll to the page
function printNumber100(number100) {
    var placeholder100 = document.getElementById('placeholder100');
    placeholder100.innerHTML = number100;
}

var button100 = document.getElementById('button100');
button100.onclick = function () {
    var result100 = dice100.roll100();
    printNumber100(result100);
};//Dice100