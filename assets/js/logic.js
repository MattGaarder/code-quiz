// // There is easy-reading below (the code without comments)

// // Initialise (most of) the variables that I will use in the following code. This is done using the
// // document.querySelector, which will look through the DOM to find elements, or IDs or classes etc.

// var timeLeft = 60;
// var score = 0;
// var currentQuestion = 0;
// var timerEl = document.querySelector("#time");
// var startButton = document.querySelector("#start");
// var questionScreen = document.querySelector("#questions");
// var feedback = document.querySelector("#feedback");
// var startScreen = document.querySelector("#start-screen");
// var endScreen = document.querySelector("#end-screen");
// var question = document.querySelector("#question-title");


// // Attach an event listener to the start button as defined in the variables above. This will make it so 
// // that when the button is "click"ed the startGame function will be invoked.

// startButton.addEventListener("click", startGame);

// // The start game function sets the class of startSreen to hide, and the classes of questionScreen and 
// // feedback to start. These variables are, again, defined above. The specific purpose of these classes
// // can be seen in the css stylesheet. The function also calls the timer function and displayQuestion function.

// function startGame() {
//     startScreen.setAttribute("class", "hide");
//     questionScreen.setAttribute("class", "start");
//     feedback.setAttribute("class", "start");
//     startTimer();
//     displayQuestion();
// }

// // The timer function has a setInterval() method that calls a function to be executed every 1000 milliseconds. 
// // setInterval takes 2 parameters: A function that runs, and the interval between each function running (1000 milliseconds).

// function startTimer() {
//     var timeInterval = setInterval(function() {

// // The timer will keep running as long as (if) the amount of time left is above 1, and the currentQuestion is
// // not as long as the amount of questions there are in myQuestions array. When these two things are the case timeLeft
// // will continue to decrement.

//     if(timeLeft > 1 && currentQuestion !== myQuestions.length) {
//     timerEl.textContent = timeLeft;
//     timeLeft --; 
//     } else {

// // Otherwise, I've set the text content of the timer element to an empty string- I've also removed the timer element
// // completely which is a little superfluous. QUESTION. It will also call the clearInterval function, stopping the timer (as defined
// // in the timeInterval variable). Also calls the end game function

//     timerEl.textContent = "";
//     timerEl.remove();
//     clearInterval(timeInterval);
//     endGame();
//     }}, 1000);
// }

// // This is the function definition of the displayQuestion function called in startGame above. 

// function displayQuestion() {
    
// // Now that I have come to comment this I realise that it is confusing that I have two question(s) here. The first 
// // corresponds to the querySelector #question-title in the HTML page, and the other is the object property of the 
// // questions in my questions.js script. 
// // Either way, basically this is going to my object array (myQuestions), (currentQuestion is the iterator), and question
// // is the key in the key value pair, and retrieves the question content and sets that as the text of the HTML tag.

//     question.textContent = myQuestions[currentQuestion].question;

// // I am not sure if this is strictly necessary, but I figured I needed to have a "ul" element to be able to attach/append 
// // "li" elements later on. 

//     var answerUl = document.createElement("ul");

// // This is the same as above, but instead of questions, this is the variable for choices. Choices being the key in the 
// // key value pair in my object

//     var choices = myQuestions[currentQuestion].choices;

// // Because there is more than one option I need to use a for loop to iterate through the length of my choices.
// // For each iteration I create a new button element that is assigned to the choice variable.

//     for(var i = 0; i < choices.length; i++) {
//         var choice = document.createElement("button");

// // This variable/button is being given text content as values of choices is being iterated through. Choices behaving 
// // kind of like its own array.
    
//         choice.textContent = choices[i];

// // For each iteration, choice, now a "li" element with text content, is being appended to the "ul" element created above.

//         answerUl.appendChild(choice);
//     }

// // I then find the #choices div in my HTML page and append to it the "ul" element with its corresponding child "li" elements 

//     document.querySelector("#choices").appendChild(answerUl);

// // This is the part that ensures that the game ends and my iterator does not go beyond the length of myQuestions array to cause an error

//     if(currentQuestion === myQuestions.length) {
//     endGame();
//     } 

// // As long as this isn't the case currentQuestion can just keep iterating.

//         else {
//     currentQuestion++;
//     }
// }

// // The following code provides the clicking on multiple-choice buttons to either get the answer wrong or right, but either
// // way move on to the next question and clearing choices functionality.
// // Remember that now #choices is now populated with a bunch of buttons appended as children. 

// document.querySelector("#choices").addEventListener("click", function(event) 
// {

// // This code checks if the event target's (the lowest level element/what is being clicked on) tag name is "BUTTON".
// // The event object represents an event in the browser, 
// // and the target property of the event object is the element that triggered the event.
// // We define a new variable basically saying that what was clicked on is the selected choice from the user.

//     if (event.target.tagName === "BUTTON") {
//         var selectedChoice = event.target;

// // I have a correct answer key in my key value pairs in my objects. QUESTION. I minus one from my currentQuestion iterator because 
// // I iterated plus one above so I need to correct for that.

//         var correctAnswer = myQuestions[currentQuestion - 1].correctAnswer;
//             // feedback.textContent = "Correct"; QUESTION.

// // If what the user clicked on is not equal to the correct answer, minus 10 from timeLeft 

//     if (selectedChoice.textContent != correctAnswer) {
//             timeLeft -= 10;
//             // feedback.textContent = "Incorrect"; QUESTION. !=
//         }

// // After each click, clear the choices and display the next question (iterate current question)        

//     clearChoices();
//     displayQuestion();
//     }   
// });

// // Defines the clearChoices function called above.

// function clearChoices() {
//     var answerUl = document.querySelector("ul");

// // Choices variable is assigned all the buttons with ID of choices (QUESTION)

//     var choices = document.querySelectorAll("#choices button");

// // Because I used querySelectorAll, choices isn't a variable, but a node array variable, or something like that
// // basically there is more than one, so like above I need to iterate through them and use the .remove method, to remove them

//     for (var i = 0; i < choices.length; i++) {
//         choices[i].remove();
//         answerUl.remove();     
//     }
// }

// // Defines endGame function which is pretty simple, sets classes like startGame function, sets timeLeft to be score
// // which is then set as the text content of final score (id in the HTML). It also returns score so that this can be used later
// // to send into local storage as part of an object.

// function endGame(){
//     questionScreen.setAttribute("class", "hide");
//     endScreen.setAttribute("class", "start");
//     var finalScore = document.querySelector("#final-score")
//     score = timeLeft;
//     finalScore.textContent = score;
//     return score;
// }

// // An event listener on the submit button that does a fair amount of stuff. 

// document.querySelector("#submit").addEventListener("click", function(event) {

// // Creates an empty array and assigns that to the variable for highscores, (QUESTION), that we can push our stringified highscore object into

//     var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// // This is the highscoreObject object which has the key value pair of whatever the value of what the user typed in as their initials
// // and the returned score from the endGame function above

//     var highscoreObject = {
//         savedScore: score,
//         savedInitials: document.querySelector("#initials").value 
//     };

// // We push this object into our array

//     highscores.push(highscoreObject);

// // We then need to stringify this array so that we are able to save it in local storage. It is saved as "highscores", I
// // am not sure what the term for this is when it is in local storage (QUESTION)- is it still a variable?

//     localStorage.setItem("highscores", JSON.stringify(highscores));

// // The submit button also changes the location of the window, i.e. functions as a link

//     window.location.href = 'highscores.html';

// // Be warned! This function DOES NOT WORK! Because the HTML elements on the HTML page have not been loaded yet. 
// // I was stuck on this for a good long while. 

//     displayHighscores();
// });

    


// // The below variables will just get overwritten each time because they are static variables. Be sure to remember the JSON stringify and push 
// // to array functionality.

//     // var initials = document.querySelector("#initials").value;
//     // localStorage.setItem("savedScore", score);
//     // localStorage.setItem("savedInitials", initials);

// /* <body>
// <div class="wrapper">
//   <h1>Highscores</h1>
//   <ol id="highscores"></ol>

//   <a href="index.html"><button>Go Back</button></a>
//   <button id="clear">Clear Highscores</button>
// </div> */











// For easy reading: All in a chunk


var timeLeft = 60;
var score = 0;
var currentQuestion = 0;
var timerEl = document.querySelector("#time");
var startButton = document.querySelector("#start");
var questionScreen = document.querySelector("#questions");
var feedback = document.querySelector("#feedback");
var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var question = document.querySelector("#question-title");

startButton.addEventListener("click", startGame);

function startGame() {
    startScreen.setAttribute("class", "hide");
    questionScreen.setAttribute("class", "start");
    feedback.setAttribute("class", "start");
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

}

document.querySelector("#choices").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
    var selectedChoice = event.target;
    var correctAnswer = myQuestions[currentQuestion].correctAnswer;
            // feedback.textContent = "Correct"; QUESTION.
    if (selectedChoice.textContent != correctAnswer) {
    timeLeft -= 10;
            // feedback.textContent = "Incorrect"; QUESTION. !=
    }
    clearChoices();
    currentQuestion++;
    if(currentQuestion === myQuestions.length) {
    endGame();
    } else {
    displayQuestion();
    }   
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
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    var highscoreObject = {
        savedScore: score,
        savedInitials: document.querySelector("#initials").value 
    };
    highscores.push(highscoreObject);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = 'highscores.html';
    displayHighscores();
});

