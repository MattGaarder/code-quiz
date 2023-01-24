# coding-quiz
A timed coding quiz with multiple-choice questions.

This quiz uses .querySelector to dynamically generate choices and question for my code-quiz on the HTML page. 
It does so by traversing the DOM to the appropriate properties in my questions array of objects to display 
the appropriate questions and answer options. It also uses .setAttribute to dynamically change the classes of 
my elements to have certain portions of my page appear hidden or shown, with event listeners that react to 
inputs from the user (clicks, input .values etc). It also uses JSON.stringify and parse to store the score and
initials from the user to be displayed in a .sort(ed) highscore list, that is stored in local storage and 
persisted over closing or refreshing the browser. 

https://github.com/MattGaarder/code-quiz
https://mattgaarder.github.io/code-quiz/

![Alt text](assets/images/Screenshot%202023-01-21%20at%2015.24.43.png)
![Alt text](assets/images/Screenshot%202023-01-21%20at%2015.25.02.png)
![Alt text](assets/images/Screenshot%202023-01-21%20at%2015.25.18.png)