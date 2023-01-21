





function displayHighscores() {
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.sort(function(a, b){
        return b.savedScore - a.savedScore
    });
    var highscoresList = document.querySelector("#highscores");
    for (var i = 0; i < highscores.length; i++) {
        var scoreLi = document.createElement("li");
        var score = highscores[i];
        scoreLi.textContent = score.savedScore + " " + score.savedInitials;
        highscoresList.appendChild(scoreLi);
    }
}

displayHighscores();

document.querySelector("#clear").addEventListener("click", function(event){
    var scoreLi = document.querySelectorAll("li");
    for (var i = 0; i < scoreLi.length; i++) {
        scoreLi[i].remove();       
    }
    localStorage.removeItem("highscores");
});















// document.querySelector("#submit").addEventListener("click", function(event) {
//     var initials = document.querySelector("#initials").value;
//     localStorage.setItem("savedScore", score);
//     localStorage.setItem("savedInitials", initials);
//     window.location.href = 'highscores.html';
// });

// var choices = myQuestions[currentQuestion].choices;
// for(var i = 0; i < choices.length; i++) {
//     var choice = document.createElement("button");
//     choice.textContent = choices[i];
//     answerUl.appendChild(choice);
// }

// var highscoreObject = localStorage.getItem("forHighscore");
// console.log(highscoreObject);
// var highScoresArray = [];

// var highScores = document.querySelector("#highscores");
// var savedScore = localStorage.getItem("savedScore");
// var savedInitials = localStorage.getItem("savedInitials");

// if(savedInitials && savedScore){
//     highScoresArray.push({
//         initials: savedInitials,
//         score: savedScore
//     })
// }

// highScoresArray.forEach(function(object){
//     var scoreLi = document.createElement("li");
//     scoreLi.textContent = object.initials + ":" + " " + object.score;
//     highScores.appendChild(scoreLi);
// })



// 1. You should create a variable inside the event listener that uses JSON.parse and localStorage.getItem to get 
// the saved item from local storage using the "savedHighScore" key
// --or that just stores an empty array to the variable if there is no local storage item.
// 2. You're right on track with creating an object and storing the score and intials as properties of the object.
// 3. Then you should use the .push to add forHighscore to the array you created before
// 4. Then use localStorage.setItem just like you did, but set the array that you pushed your object into as the item to set--instead of the forHighscore object.

// And with the other page, the issue you're having there is that you no longer have access to the forHighscore object because you're working 
// with another file, so you would have to get the array from localStorage just like you did at the beginning of the addEventListener, and then 
// you would probably loop through that array and at each object you would get the initials and score and create elements and append them to the elements on the page for them.