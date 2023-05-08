# code-quiz-web-API-challenge-by-solomon-Tegegne
# date: 05-08-2023

Code Quiz

This is a simple quiz game built with HTML, CSS and JavaScript. The game presents the user with a series of multiple-choice questions and awards points for correct answers. The game ends after the user has answered a predetermined number of questions or after a set amount of time has elapsed.

## Usage
To use this game, simply download the files and open the index.html file in your web browser. The game will automatically start when the page loads.

## Code
The JavaScript code for this game is divided into several sections:

1. Variables
The game starts by declaring several variables:

# question: 
represents the HTML element that displays the current question.
# opt1 and opt2:
represent the HTML elements that display the answer choices.
# choices:
an array that combines both opt1 and opt2 arrays to represent all answer choices.
# scoreText: 
represents the HTML element that displays the user's current score.
# progressText: 
represents the HTML element that displays the current question number out of the total number of questions.
# timeCounter: 
represents the HTML element that displays the remaining time.
# userName: 
represents the HTML element that accepts user name input.
# currentQuestion: 
an object that holds the current question and its answer choices.
# acceptingAnswers: 
a boolean that controls whether the user can select an answer.
score: the user's current score.
# questionCounter: 
the current question number.
# availableQuestions: 
an array that holds the questions that are still available to be asked.
# questions: 
an array of objects that represent the quiz questions and their answer choices.
# SCORE_POINTS: 
the number of points awarded for each correct answer.
# MAX_QUESTIONS: 
the maximum number of questions that can be asked in one game.
2. Functions
# #startGame:  
this function resets all necessary variables to their initial values and starts the game.
# clearRadioButtons: 
this function unchecks all radio buttons so that the user can only select one answer per question.
# getNewQuestion: 
this function selects a random question from the availableQuestions array and displays it on the screen.
# incrementScore: 
this function increases the user's score by a given number of points.
# timerInterval: 
this function sets the time interval of the game to be 60 seconds, and each second the time left is reduced by one second. If the time is up, the function clears the time interval.
# choices.forEach: 
this function loops through each answer choice and adds an event listener to each one. When an answer choice is selected, the function checks whether the answer is correct or not and adjusts the score accordingly. If the answer is incorrect, 10 seconds is subtracted from the remaining time and the timeCounter element turns red for half a second.

## Credits
this quiz app was first built by James Q Quick a you tuber and I have modified it to my own version, with a better UI and timer method and also along with the acceptance criteria for the challenge.

## License
no license required

## contribution
anyone can contribute to this project by forking it and making a pull request.

## contact
for any questions or comments please contact me through solowon27@hotmail.com