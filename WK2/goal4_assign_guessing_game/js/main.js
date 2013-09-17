/**
 * GUESSING GAME:
 *
 * Created By: Douglas Sweeting
 * Date:   9/15/2013
 * 
 * GUESSING GAME
 */

//Game variables


var theNumber = Math.floor(Math.random()*10+1);

function checkguess(){

    var guess = document.getElementById('guess');
    var output = document.getElementById('output');
    var myNumber = guess.value;
    if (myNumber < theNumber)
    //alert("Too Low! Guess Again!");
        output.value = "Too Low! Guess Again!";
    else if (myNumber > theNumber)
    //alert("Too High! Guess Again!");
        output.value = "Too High! Guess Again!";
    else if (myNumber == theNumber)
    //alert("You got the number!");
        output.value = "You got it!!!!";
}