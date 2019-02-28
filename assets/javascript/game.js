 //computers choices (19-120)
 var compChoices = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
 var randomNumber = [];
 console.log(compChoices.length);
 //computer generate random number
 randomNumber = compChoices[Math.floor(Math.random(compChoices) * compChoices.length)];
 console.log(randomNumber);
 //display on a screen
 $("#random-number").text(randomNumber);

 var totalScore = 0;
 var wins =0;
 var losses = 0;


 //reset after each turn
 //choices of numbers to assign for crystals (1-12)
 var options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

 //var crystalsValue = [];
 //randomly generate assign number for each crystal, hidden and display
 var crystals = {
     red: 0,
     green: 0,
     blue: 0,
     yellow: 0,
 }
 console.log("before for in loop :", crystals);
 for (var key in crystals) {

     var value = 0;
     value = options[Math.floor(Math.random(options) * options.length)];
     console.log(value);
     crystals[key] = value;

 }
 console.log("after for in loop :", crystals);
 //
 //by clicking on a crystal adding number's value to the total score
 $('.crystals img').on("click", function () {
     totalScore = totalScore + crystals[$(this).attr("data-color")]
    //if massege has class "Game-Over"
    //clear massege
    if ($( "#massege" ).hasClass("Game-Over")){
        $("#massege").text("").removeClass("Game-Over");
    };

     console.log(totalScore)
     $("#total-score").text(totalScore);
     //reset
     // Function for resetting game.
     function reset() {
         randomNumber = compChoices[Math.floor(Math.random(compChoices) * compChoices.length)];
         $("#random-number").text(randomNumber);
         totalScore = 0;
         $("#total-score").text(totalScore);
        
     };

    

     //you win
     //if computer random number === total score
     if (randomNumber === totalScore) {
            wins++;
         //display massege "You Win!"
         $("#massege").text("You win!!!").addClass("Game-Over");
         //add to the wins and display score
         $("#wins").text(wins);
         //reset random number and crystal's assigned numbers
         reset();
     }
     //you lose
     //if computer random number < total score
     else if (randomNumber < totalScore) {
         losses++;
         //display massege "You Lose"
         $("#massege").text("Try Again!").addClass("Game-Over");
         //add to the losses and display score
         $("#losses").text(losses);
         //reset random number and crystal's assigned numbers
         reset();
     }
 });