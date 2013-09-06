/**
 * Created with JetBrains WebStorm.
 * User: Douglas Sweeting
 * Date: 9/5/13
 * Time: 1:16 PM
 * Assignment : Goal 1 Assignment duel 1
 */



// Self-executing function
(function (){

    console.log("!!!Fight!!!");


     //The names of the players
     var firstPlayerName = "Spawn";
     var secondPlayerName = "Alucard";

     //The players health
     var firstPlayerHealth = 100;
     var secondPlayerHealth = 100;

     //players damage
     var firstPlayerDamage = 15;
     var secondPlayerDamage = 15;

     var round =1;

     //This function contains the code that loops through rounds and reduces the player's health
     function fight(){
         console.log("This is the Fight function");
         alert(firstPlayerName + " : " + firstPlayerHealth + " vs " + secondPlayerName + " : " + secondPlayerHealth + '\n' +
             "         " +"ROUND " + round + " FIGHT! ");

         for (var i=0; i< 10; i++){

             //Shows the loop is working
             console.log(i);

             //The minimum damage for players 1&2
             var minDamage1 = firstPlayerDamage * .5;
             var minDamage2 = secondPlayerDamage * .5;

             //The Random variables
             var firstPlayer = Math.floor(Math.random() * (firstPlayerDamage - minDamage1) + minDamage1);
             var secondPlayer = Math.floor(Math.random() * (secondPlayerDamage - minDamage2) + minDamage2);

             //This is the output for random variables
             console.log(firstPlayer);
             console.log(secondPlayer);
         }

         //winnerCheck()

     };



     /* This function is invoked after each round and returns a string of either the winner, the loser, a tie (both die)
     or no winner yet. This function does the conditional logic to determine if there is a winner or not.)
     */
    function winnerCheck(){

    };

    /* The program get's started here */
    console.log("Program starts here");
    fight();

})();