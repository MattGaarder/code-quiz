// # code-quiz
// a timed coding quiz with multiple-choice questions.


// Pre-planning for the code:


// Just thinking about initializing some variables that will be used later. (I'm still partially unclear about when it is necessary to initialise variables in a global scope and when not to, theoretically I understand but in reality I don't really).

let timeLeft = 60; 
let score = 0;

// I am going to outline the basic structure of a question so that I can base how answers and questions are displayed later. I think this might be a good way of doing it, but I'm not sure: 

var myQuestions = [{
    question: "What is a string?",
    answers: [
        "A data type",
        "A true or false input",
        "An instruction to the console"
        ]
},
{
    question: "...", etc.
}
]

// Define our start button in our javascript in order to give it functionality

var startButton = document.querySelector(".start");

// Attach event listener to start button to call startGame function on click

startButton.addEventListener("click", startGame);

// The startGame function will change the class attribute in our code so that #start-screen div's class will change from .start to .hide and our questions div will go from hide to start.
// Instead of parsing a startGame function like above, alternatively I could use an anonymous function that will do what is needed.
// Anonymous functions are often used when a function is only going to be used once and it is not necessary to reuse the function elsewhere in your code.
// I can call the startGame function within this function. (And also the startTimer function)

startButton.addEventListener("click", function(event) {
    if (buttonClass === "start") {
        buttonClass = "hide";
        startButton.setAttribute("class", "hide");
    } else {
        buttonClass = "start";
        container.setAttribute("class", "start");
    }
    startGame();
    startTimer();
});

// The startTimer function will look something like the following:

function startTimer() {
    var timerEl = document.getElementById("time");
    var timeLeft = 60;
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
      endGame();
  }

// The startGame function will render questions on the HTML
// This will be done by creating elements, and appending children to that element.
// How this is done will be done by how the question objects are structured, and how best to traverse the DOM.

var favoriteEl = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
favoriteEl.textContent = "My favorite foods are:";
favoriteEl.appendChild(listEl);
li1.textContent = "Banana";
listEl.appendChild(li1);

// I think I need to use the .textContent method to have whatever question it is that I have to appear as the question in the #question-title element in the HTML.
// I will then need to append children to that element. Or, because there is another div with the id/class of choices, I will need to create an empty ul and append children to that.

// After that is done, I will need to use the .match function to have the correct answer match the class of the value of that is the correct answer value.
// With basic logic, if the answer matches (or any event), it will trigger the render question function again, if the answer doesn't (either way the render question function wil run) it will reduce the timer by 10 seconds.


// Eventually I will need to trigger an endGame function that will get the final score ID and prompt for initials and set those to local storage 

function endGame() {

    document.getElementById("final-score").innerHTML = "Your final score is: " + score;
    let initials = prompt("Enter your initials:");

// Save the score and initials to local storage
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score);
}

// This can then be  saved and displayed whenever later.



var info = [{
    food: "hamburger",
    color: "brown"
},
{
    food: "sandwich",
    color: "blue"
},
{
    food: "pizza",
    color: "green"
    }];

    for (var i = 0; i < info.length; i++) {
    var newLi = document. createElement ("1¡");
    newLi.textContent = info[i].food;
    newLi.setAttribute("style", "color: white; padding: 5px; margin-left: 35px; background-color: " + info[i].color);
    listEl.appendChild(newLi);
    }


// Implement a button that triggers a function that starts the quiz and starts the timer.
// If a question is answered incorrectly this subtracts additional time from the timer. 
// When the timer ends, or all questions have been answered, the game ends. 
// The players score is the amount of time remaining on the clock.
// The game ending changes the page where the user can save their inititals and highscore using local storage. 

// General structure of what a question and the multiple choice answers might look like and array of objects, each object containing a seperate array of potential answers: 

var myQuestions = [{
        question: "What is a string?",
        answers: [
            "A data type",
            "A true or false input",
            "An instruction to the console"
            ]
    },
    {
        question: "...", etc.
    }
]

// To then access questions or answers based on this I will need to traverse the DOM to get to certain values. e.g: 

for(var i = 0; i < myQuestions.length; i++) {
    console.log(myQuestions[i].questions);
}



// Highscores will function as the user save their initials into the text input area, and this will then be appended as a child to the ordered list element in the HTML.
// We will need to write to local storage in our logic page, and read from our local storage in our highscores page. 
// In order to change the location of our page (i.e. switching from the game page to the highscores page with a click event) I can use the following code (found in 08-Stu-Bubbling): 

carousel.addEventListener("click", function(){
    window.location.href = images[index] (or a URL or whatever);
});




// Summary of the Week:

// Traversing the DOM
// Manipulating the DOM (by setting attributes)
// Dynamically Adding things to the DOM (appending children)
// Timers 
// Event listeners
// Preventing default/stopping propogation
// Data attributes
// Local storage (and storing objects using JSON.stringify and parse())

// getting elements from HTML by ID (we can also use querySelector and innerHTML):

var articlesDiv = document.getElementById('articles');

articlesDiv.children[0].children[1].style.fontSize = "50px";
