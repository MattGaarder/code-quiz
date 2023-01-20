


// document.querySelector("#submit").addEventListener("click", function(event) {
//     var initials = document.querySelector("#initials").value;
//     localStorage.setItem("savedScore", score);
//     localStorage.setItem("savedInitials", initials);
//     window.location.href = 'highscores.html';
// });


console.log(forHighscore);

var highScoresArray = [];

var highScores = document.querySelector("#highscores");
var savedScore = localStorage.getItem("savedScore");
var savedInitials = localStorage.getItem("savedInitials");

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



