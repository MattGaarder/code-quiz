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
    question: "What does Javascript do?",
    choices: [
        "A powerful insect repellant",
        "Provides instructions on how to make a good cup of coffee",
        "Allows us to give interactivity to our webpages"],
    correctAnswer: "Allows us to give interactivity to our webpages"
    
},
{
    question: "What does CSS do?",
    choices: [
        "Provides us with very uninspired mutliple-choice questions",
        "Dictates the style and layout of our webpages",
        "Determines the length of a project"],
    correctAnswer: "Dictates the style and layout of our webpages"
    
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
    question: "What does Javascript do?",
    choices: [
        "A powerful insect repellant",
        "Provides instructions on how to make a good cup of coffee",
        "Allows us to give interactivity to our webpages"],
    correctAnswer: "Allows us to give interactivity to our webpages"
    
}
];



var timerEl = document.querySelector("#time");

var timeLeft = 60;
var score = 0;
var currentQuestion = 0;
var startButton = document.querySelector("#start");
var questionScreen = document.querySelector("#questions");
var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");

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
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft --; 
    } else if(timeLeft === 1){
    timerEl.textContent = timeLeft + " second remaining";
    timeLeft --;
    } else {
    timerEl.textContent = '';
    clearInterval(timeInterval);
    endGame();
    }}, 1000);
}

function displayQuestion() {
    var question = document.querySelector("#question-title");
    question.textContent = myQuestions[currentQuestion].question;

    var answerUl = document.createElement("ul");

    var choices = myQuestions[currentQuestion].choices;
    for(var i = 0; i < choices.length; i++) {
        var choice = document.createElement("li");
        choice.textContent = choices[i];
        answerUl.appendChild(choice);
        
    }
    document.querySelector("#choices").appendChild(answerUl);

    if(currentQuestion === myQuestions.length -1) {
    endGame();
    } else {
        currentQuestion++;
    }
    
}

document.querySelector("#choices").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
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
    var choices = document.querySelectorAll("#choices li");
    for (var i = 0; i < choices.length; i++) {
        choices[i].remove();
        answerUl.remove();
        
    }
}

function endGame(){
    clearChoices();
    questionScreen.setAttribute("class", "hide");
    endScreen.setAttribute("class", "start");
}

// if (currentQuestion < myQuestions.length - 1) {
//     currentQuestion++;
//     displayQuestion();
// endGame();
// }
