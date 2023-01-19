var myQuestions = [{
    question: "What is a string?",
    choices: [
        "A data type",
        "A true or false input",
        "An instruction to the console"
        ],
    correctAnswer: "A data type"
},
{
    question: "What is a boolean?",
    choices: [
        "A binary that indicates either true or false",
        "A man's name",
        "Halloween decoration"],
    correctAnswer: "A binary that indicates either true or false"
    
},
{
    question: "What is a Coolean?",
    choices: [
        "A binary that indicates either true or false",
        "A man's name",
        "Halloween decoration"],
    correctAnswer: "A binary that indicates either true or false"
    
},
{
    question: "What is a noolean?",
    choices: [
        "A binary that indicates either true or false",
        "A man's name",
        "Halloween decoration"],
    correctAnswer: "A binary that indicates either true or false"
    
}
];



var timerEl = document.querySelector("#time");

var timeLeft = 60;
var score = 0;
var currentQuestion = 0;
var startButton = document.querySelector("#start");

startButton.addEventListener("click", startGame);

function startGame() {
    var startScreen = document.querySelector("#start-screen");
    startScreen.setAttribute("class", "hide");
    var questionScreen = document.querySelector("#questions");
    questionScreen.setAttribute("class", "start");
    startTimer();
    displayQuestion();
}

function startTimer() {
    var timeInterval = setInterval(function() {
    if(timeLeft > 1) {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft --; 
    } else if(timeLeft === 1){
    timerEl.textContent = timeLeft + " second remaining";
    timeLeft --;
    } else {
    timerEl.textContent = '';
    clearInterval(timeInterval);
    }}, 1000);
    // endGame();
}

function displayQuestion() {
    var question = document.querySelector("#question-title");
    question.textContent = myQuestions[currentQuestion].question;

    var answerUl = document.createElement("ol");

    var choices = myQuestions[currentQuestion].choices;
    for(var i = 0; i < choices.length; i++) {
        var choice = document.createElement("li");
        choice.textContent = choices[i];
        answerUl.appendChild(choice);
        
    }
    currentQuestion++;
    document.querySelector("#choices").appendChild(answerUl);
}

document.querySelector("#choices").addEventListener("click", function(event) {
    if (event.target.tagName === "li") {
        var selectedChoice = event.target;
        var correctAnswer = myQuestions[currentQuestion - 1].correctAnswer;
        if (selectedChoice.textContent === correctAnswer) {
            score++;
        }
        // other code to move on to the next question or end the game
    }
    console.log(score)
    displayQuestion();
});




// if (currentQuestion < myQuestions.length - 1) {
//     currentQuestion++;
//     displayQuestion();
// endGame();
// }
