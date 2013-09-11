/**
 * Created with JetBrains WebStorm.
 * User: Douglas Sweeting
 * Date: 9/5/13
 * Time: 1:16 PM
 * Assignment : Goal 2 Assignment duel 2
 */



// Self-executing function
(function (){

    console.log("!!!Fight!!!");


     //The names of the players, health, and Damage
     var firstPlayerArray = ["Spawn", 100, 20];
     var secondPlayerArray = ["Alucard" , 100, 20];

     var round =1;

     //This function contains the code that loops through rounds and reduces the player's health
     function fight(){
         console.log("This is the Fight function");
         alert(firstPlayerArray [0] + " : " + firstPlayerArray[1] + " vs " + secondPlayerArray[0] + " : " + secondPlayerArray[1] + '\n' +
             "                  " +"START ");

         for (var i=0; i< 10; i++){

             //Shows the loop is working
             console.log(i);

             //The minimum damage for players 1&2
             var minDamage1 = firstPlayerArray [2] * .5;
             var minDamage2 = secondPlayerArray [2] * .5;

             //The Random variables
             var firstPlayer = Math.floor(Math.random() * (firstPlayerArray [2] - minDamage1) + minDamage1);
             var secondPlayer = Math.floor(Math.random() * (secondPlayerArray [2] - minDamage2) + minDamage2);

             //This is the actual damage being inflicted to the player.
             firstPlayerArray [1] -= firstPlayer;
             secondPlayerArray [1] -= secondPlayer;

             //This is the output for random variables


             var results = winnerCheck();
             console.log(results);

             if (results === "no winner"){
                round ++;
             alert(firstPlayerArray [0] + " : " + firstPlayerArray[1] + " vs " + secondPlayerArray[0] + " : " + secondPlayerArray[1] + '\n' +
                     "       " +"ROUND " + round + " FIGHT! ");
             }else{
                 alert(results);
                 break;
             }

         }



     }



     /* This function is invoked after each round and returns a string of either the winner, the loser, a tie (both die)
     or no winner yet. This function does the conditional logic to determine if there is a winner or not.)*/
    function winnerCheck(){

         var result = "no winner";
          console.log("The winners circle");
        if (firstPlayerArray [1] < 1 && secondPlayerArray [1] < 1){
            result = "You both Lose";
        }else if(firstPlayerArray [1] < 1){
            result=secondPlayerArray [0] +" shuns defeat!"
        }else if(secondPlayerArray [1] < 1){
            result = firstPlayerArray [0] + " is victorious!"
        }
         return result;
    }

    /* The program get's started here */
    console.log("Program starts here");
    fight();

})();