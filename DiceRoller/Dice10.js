//Copyright (c) 2019 by Jacob Schaefer (https://codepen.io/Pyremell/pen/eZGGXX)
    //Dice10
var dice10 = {
    sides: 10,
    roll10: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}
//Prints dice roll to the page
function printNumber10(number10) {
    var placeholder10 = document.getElementById('placeholder10');
    placeholder10.innerHTML = number10;
}

var button10 = document.getElementById('button10');
button10.onclick = function () {
    var result10 = dice10.roll10();
    printNumber10(result10);
};  //Dice10