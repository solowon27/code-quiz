# 04 Web APIs: Quiz game challenge
# by Solomon Tegegne (solo) with University of Utah Coding Bootcamp
# 05-08-2023
## Quiz Game


## Usage 
To use this game, simply download the files and open the index.html file in your web browser. The game will automatically start when the page loads.

## Description
This is a simple quiz game built with HTML, CSS and JavaScript. The game presents the user with a series of multiple-choice questions and awards points for correct answers. The game ends after the user has answered a predetermined number of questions or after a set amount of time has elapsed.

## Details
# Variables and Constants
question: holds the reference to the HTML element with an ID of "question".

1. selectMethod1: holds an array of HTML elements with a class of "choice-text". This array is created using Array.from() method, which converts the HTML collection returned by getElementsByClassName() into an array.

2. selectMethod2: holds an array of HTML elements with a class of "choice-prefix". This is also created using Array.from().

3. choices: an array that combines selectMethod1 and selectMethod2 arrays using the spread operator.

4. candidate: holds the reference to the HTML element with an ID of "candidate".

5. scoreText: holds the reference to the HTML element with an ID of "score".

6. grade: holds the reference to the HTML element with an ID of "grade".

7. progressText: holds the reference to the HTML element with an ID of "progress".

8. timeCounter: holds the reference to the HTML element with an ID of "time".

9. submitBtn: holds the reference to the HTML element with an ID of "submit".

10. quizContainer: holds the reference to the HTML element with a class of "quiz-container".

11. resultContainer: holds the reference to the HTML element with a class of "result-container".

12. message: holds the reference to the HTML element with an ID of "msg".

13. AEl, BEl, CEl, DEl: These variables hold the messages that will be displayed based on the user's score.

14. sadFace, happyFace, mediumFace, nailedIt: These variables hold Unicode emojis that will be displayed along with the messages.

15. currentQuestion: holds the object that represents the current question being displayed.

16. acceptingAnswers: a boolean variable that determines whether the user's answer is accepted or not.

17. score: holds the user's current score.

18. questionCounter: holds the number of questions that have been asked so far.

19. availableQuestions: holds an array of questions that are still available to be asked.

20. questions: an array of objects that represent the questions, choices, and the correct answers.

21. SCORE_POINTS: a constant that holds the score that the user will earn for each correct answer.

22. MAX_QUESTIONS: a constant that holds the maximum number of questions that the user will answer in one game.

# Functions

1. startGame(): a function that initializes the game. It sets the initial values of questionCounter, score, and availableQuestions, and starts the timer.
2. clearRadioButtons(): a function that clears all the radio buttons that represent the user's choices after each question.
3. getNewQuestion(): a function that gets a new question from the availableQuestions array, displays it, and sets acceptingAnswers to true.
An anonymous function that is attached to each choice using the forEach() method. This function handles the user's selection and determines whether the answer is correct or incorrect.
4. getUserName(): a function that prompts the user to enter their name and returns it.
Event Listeners
5. An event listener that is attached to the submit button. It prevents the default behavior of the form, prompts the user to enter their name, and displays the user's name, score, and grade.

## Credits
this quiz app was mad with the help of by James Q Quick a you tuber and copilot suggestion and built it to my own version, with a better UI and timer method and also along with the acceptance criteria for the challenge.

## License
no license required
## deployed link
https://solowon27.github.io/code-quiz-web-API-challenge-by-solomon-Tegegne/

## contribution
anyone can contribute to this project by making a pull request.

## contact
for any questions or comments please contact me through solowon27@hotmail.com

2023 Solomon Tegegne (solo)
