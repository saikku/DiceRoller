//Copyright (c) 2019 by Jacob Schaefer (https://codepen.io/Pyremell/pen/eZGGXX)


//Dice6
var dice6 = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  //Prints dice roll to the page
  function printNumber(number) {
    var placeholder6 = document.getElementById('placeholder6');
    placeholder6.innerHTML = number;
  }

  var button6 = document.getElementById('button6');
  button6.onclick = function() {
    var result6 = dice6.roll();
    printNumber(result6);
  };//Dice6


  //Dice20
  var dice20 = {
    sides: 20,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  //Prints dice roll to the page
  function printNumber(number) {
    var placeholder20 = document.getElementById('placeholder20');
    placeholder20.innerHTML = number;
  }

  var button20 = document.getElementById('button20');
  button20.onclick = function() {
    var result20 = dice20.roll();
    printNumber(result20);
  };//Dice20