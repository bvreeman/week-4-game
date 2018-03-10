'use strict';

$(document).ready(function() {
    let randomNumber = Math.floor(Math.random()*102+19)

    $('#randomNumber').text(randomNumber);


});

let value1 = Math.floor(Math.random()*11+1)
let value2 = Math.floor(Math.random()*11+1)
let value3 = Math.floor(Math.random()*11+1)
let value4 = Math.floor(Math.random()*11+1)
let totalValue = 0
let wins = 0
let losses = 0


$('#button1').on('click', function(){
    totalValue = totalValue + value1;
    $('#yourScore').text(totalValue);
    if(totalValue === randomNumber){
        alert('You won!');
        wins++
        $('#winning').text(wins);
    } else if (totalValue > randomNumber){
        alert('You lose!')
        losses++
        $('#losing').text(losses);
    }
});


// document.getElementById("demo").innerHTML =
// Math.floor(Math.random() * 100) + 1;