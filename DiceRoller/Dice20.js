//Copyright (c) 2019 by Jacob Schaefer (https://codepen.io/Pyremell/pen/eZGGXX)
  //Dice20
var dice20 = {
    sides: 20,
    roll20: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  //Prints dice roll to the page
  function printNumber20(number20) {
    var placeholder20 = document.getElementById('placeholder20');
    placeholder20.innerHTML = number20;
  }

  var button20 = document.getElementById('button20');
  button20.onclick = function() {
    var result20 = dice20.roll20();
    printNumber20(result20);
  };//Dice20