'use strict';
let randomNumber = Math.floor(Math.random()*102+19)

$(document).ready(function() {
    $('.randomNumber').text(randomNumber);


});

let value1 = Math.floor(Math.random()*11+1)
let value2 = Math.floor(Math.random()*11+1)
let value3 = Math.floor(Math.random()*11+1)
let value4 = Math.floor(Math.random()*11+1)
let totalValue = 0
let wins = 0
let losses = 0


$('.button1').click(function(){
    totalValue = totalValue + value1;
    $('.yourScore').text(totalValue);
    if(totalValue == randomNumber){
        alert('You won!');
        wins++
        $('.winning').text(wins);
        reset();
    } else if (totalValue > randomNumber){
        alert('You lose!')
        losses++
        $('.losing').text(losses);
        reset();
    }
    console.log(value1);
});

$('.button2').click(function(){
    totalValue = totalValue + value2;
    $('.yourScore').text(totalValue);
    if(totalValue == randomNumber){
        alert('You won!');
        wins++
        $('.winning').text(wins);
        reset();
    } else if (totalValue > randomNumber){
        alert('You lose!')
        losses++
        $('.losing').text(losses);
        reset();
    }
    console.log(value2);
});

$('.button3').click(function(){
    totalValue = totalValue + value3;
    $('.yourScore').text(totalValue);
    if(totalValue == randomNumber){
        alert('You won!');
        wins++
        $('.winning').text(wins);
        reset();
    } else if (totalValue > randomNumber){
        alert('You lose!')
        losses++
        $('.losing').text(losses);
        reset();
    }
    console.log(value3);
});

$('.button4').click(function(){
    totalValue = totalValue + value4;
    $('.yourScore').text(totalValue);
    if(totalValue == randomNumber){
        alert('You won!');
        wins++
        $('.winning').text(wins);
        reset();
    } else if (totalValue > randomNumber){
        alert('You lose!')
        losses++
        $('.losing').text(losses);
        reset();
    }
    console.log(value4);
});

function reset(){
    randomNumber = Math.floor(Math.random()*102+19)
    $('.randomNumber').text(randomNumber);
    value1 = Math.floor(Math.random()*12+1)
    value2 = Math.floor(Math.random()*12+1)
    value3 = Math.floor(Math.random()*12+1)
    value4 = Math.floor(Math.random()*12+1)
    totalValue = 0

}