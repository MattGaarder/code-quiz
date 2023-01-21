var timeLeft = 60;
var score = 0;
var currentQuestion = 0;
var timerEl = document.querySelector("#time");
var startButton = document.querySelector("#start");
var questionScreen = document.querySelector("#questions");
var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var question = document.querySelector("#question-title");

startButton.addEventListener("click", startGame);

function startGame() {
    startScreen.setAttribute("class", "hide");
    questionScreen.setAttribute("class", "start");
    startTimer();
    displayQuestion();
}

function startTimer() {
    var timeInterval = setInterval(function() {
    if(timeLeft > 1 && currentQuestion !== myQuestions.length) {
    timerEl.textContent = timeLeft;
    timeLeft --; 
    } else {
    timerEl.textContent = "";
    timerEl.remove();
    clearInterval(timeInterval);
    endGame();
    }}, 1000);
}


function displayQuestion() {
    
    question.textContent = myQuestions[currentQuestion].question;

    var answerUl = document.createElement("ul");

    var choices = myQuestions[currentQuestion].choices;
    for(var i = 0; i < choices.length; i++) {
        var choice = document.createElement("button");
        choice.textContent = choices[i];
        answerUl.appendChild(choice);
    }

    document.querySelector("#choices").appendChild(answerUl);

    if(currentQuestion === myQuestions.length) {
    endGame();
    } else {
    currentQuestion++;
    }
}

document.querySelector("#choices").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        var selectedChoice = event.target;
        var correctAnswer = myQuestions[currentQuestion - 1].correctAnswer;
    if (selectedChoice.textContent != correctAnswer) {
            timeLeft -= 10;
        }
    clearChoices();
    displayQuestion();
    }   
});

function clearChoices() {
    var answerUl = document.querySelector("ul");
    var choices = document.querySelectorAll("#choices button");
    for (var i = 0; i < choices.length; i++) {
        choices[i].remove();
        answerUl.remove();        
    }
}

function endGame(){
    questionScreen.setAttribute("class", "hide");
    endScreen.setAttribute("class", "start");
    var finalScore = document.querySelector("#final-score")
    score = timeLeft;
    finalScore.textContent = score;
    return score;
}

document.querySelector("#submit").addEventListener("click", function(event) {
    // var initials = document.querySelector("#initials").value;
    // localStorage.setItem("savedScore", score);
    // localStorage.setItem("savedInitials", initials);
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    var highscoreObject = {
        savedScore: score,
        savedInitials: document.querySelector("#initials").value 
    };
    highscores.push(highscoreObject);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = 'highscores.html';
    displayHighscores();
    console.log(highscores);
});

    




/* <body>
<div class="wrapper">
  <h1>Highscores</h1>
  <ol id="highscores"></ol>

  <a href="index.html"><button>Go Back</button></a>
  <button id="clear">Clear Highscores</button>
</div> */


