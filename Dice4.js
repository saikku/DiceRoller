var dice4 = {
    sides: 4,
    roll4: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}
//Prints dice roll to the page
function printNumber4(number4) {
    var placeholder4 = document.getElementById('placeholder4');
    placeholder4.innerHTML = number4;
}

var button4 = document.getElementById('button4');
button4.onclick = function () {
    var result4 = dice4.roll4();
    printNumber4(result4);
};//Dice20