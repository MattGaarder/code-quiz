var highScores = document.querySelector("#highscores");
var highScoresArray = [];
var savedScore = localStorage.getItem("score");
var initials = localStorage.getItem("initials");

var scoreLi = document.createElement("li");
scoreLi.textContent = initials + ":" + " " + savedScore;

highScores.appendChild(scoreLi);