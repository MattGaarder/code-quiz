# coding-quiz
a timed coding quiz with multiple-choice questions.









Pre-planning for the code:

// Define our start button in our javascript in order to give it functionality

var startButton = document.querySelector(".start");

// Attach event listener to start button to call startGame function on click

startButton.addEventListener("click", startGame);

// The startGame function will change the class attribute in our code so that #start-screen div's class will change from .start to .hide
// Instead of parsing a startGame function like above, alternatively I could use an anonymous function that will do what is needed

startButton.addEventListener("click", function(event) {
  var toggle = "start";

  if(toggle === "start"){
    var toggle = element.getAttribute(".start");

    if(state === ".start") {
      element.dataset.state = "number";
      element.textContent = element.dataset.number;
    } else {
      element.dataset.state = "hidden";
      element.textContent = "";
    }
  }
});






Implement a button that triggers a function that starts the quiz and starts the timer.

If a question is answered incorrectly this subtracts additional time from the timer. 

When the timer ends, or all questions have been answered, the game ends. 

The players score is the amount of time remaining on the clock.

The game ending changes the page where the user can save their inititals and highscore using local storage. 


General structure of what a question and the multiple choice answers might look like and array of objects, each object containing a seperate array of potential answers: 

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

To then access questions or answers based on this I will need to traverse the DOM to get to certain values. e.g: 

for(var i = 0; i < myQuestions.length; i++) {
    console.log(myQuestions[i].questions);
}



Highscores will function as the user save their initials into the text input area, and this will then be appended as a child to the ordered list element in the HTML.

We will need to write to local storage in our logic page, and read from our local storage in our highscores page. 

In order to change the location of our page (i.e. switching from the game page to the highscores page with a click event) I can use the following code (found in 08-Stu-Bubbling): 

carousel.addEventListener("click", function(){
    window.location.href = images[index] (or a URL or whatever);
});




Summary of the Week:

Traversing the DOM
Manipulating the DOM (by setting attributes)
Dynamically Adding things to the DOM (appending children)
Timers 
Event listeners
Preventing default/stopping propogation
Data attributes
Local storage (and storing objects using JSON.stringify and parse())

getting elements from HTML by ID (we can also use querySelector and innerHTML):

var articlesDiv = document.getElementById('articles');

articlesDiv.children[0].children[1].style.fontSize = "50px";
