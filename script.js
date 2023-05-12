const question = document.getElementById("question");
const selectMethod1 = Array.from(document.getElementsByClassName("choice-text")); // Select all elements with the class of choice-text and convert the HTMLCollection to an array
const selectMethod2 = Array.from(document.getElementsByClassName("choice-prefix"));// Select all elements with the class of choice-prefix and convert the HTMLCollection to an array
const choices = [...selectMethod1, ...selectMethod2]; // Spread array to create a new array for the choices for the functionality of both the radio buttons and the labels
const candidate = document.getElementById("candidate");
const scoreText = document.getElementById("score");
const grade = document.getElementById("grade");
const progressText = document.getElementById("progress"); // Progress text means the question place in the quiz
const timeCounter = document.getElementById("time");
const submitBtn = document.getElementById("submit");
const quizContainer = document.querySelector(".quiz-container");
const resultContainer = document.querySelector(".result-container");
const message = document.getElementById("msg");

// grade messages /global variables
let AEl = "  Congratulations your nailed it!";
let BEl = "  Congratulations you pass the exam!";
let CEl = "  you need study more";
let DEl = "  Sorry you failed the exam";
let sadFace = "\u{1F622}";
let happyFace = "\uD83D\uDE00";
let mediumFace = "\uD83D\uDE10";
let nailedIt = "\u{1F525}";

//quizGame function variables /also global variables
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];



let questions = [ // Array of questions
    {
        question: "What is the capital of Texas?",
        choice1: "Austin",
        choice2: "Dallas",
        choice3: "Houston",
        choice4: "San Antonio",
        answer: 1
    },
    {
        question: "What is the capital of California?",
        choice1: "Los Angeles",
        choice2: "San Diego",
        choice3: "San Francisco",
        choice4: "Sacramento",
        answer: 4
    },
    {
        question: "What is the capital of New York?",
        choice1: "Buffalo",
        choice2: "Albany",
        choice3: "New York City",
        choice4: "Rochester",
        answer: 2
    },
    {
        question: "What is the capital of Florida?",
        choice1: "Miami",
        choice2: "Tampa",
        choice3: "Orlando",
        choice4: "Tallahassee",
        answer: 4
    }
];
const SCORE_POINTS = 25; // Points awarded for each correct answer
const MAX_QUESTIONS = 4; // Max number of questions in the quiz

quizGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; // Spread operator to create a new array of questions
    timeLeft = 30; // Total time for the quiz in seconds
    timerInterval = setInterval(() => {
        timeLeft--;
        timeCounter.textContent = `${timeLeft} seconds remaining`;
        if (timeLeft <= 0) { // End the game if the timer reaches 0 or there are no more questions it seems redundant to check for availableQuestions.length === 0 here since it's already checked in getNewQuestion()       
            return stopNewQuestion();
        }
        
    }, 1000);
    getNewQuestion();
};

function clearRadioButtons() {
    const radioButtons = document.querySelectorAll('input[type=radio]');
    radioButtons.forEach(radioButton => {
      radioButton.checked = false;  // Uncheck all radio buttons every time a new question is loaded
    });
  }
function stopNewQuestion (){
    clearInterval(timerInterval);
    timeCounter.textContent = "time is up! please save your score";
    choices.forEach(choice => {
        choice.style.display = 'none'; // Disable all choices when the timer reaches 0 i know it is not the best way to do it but it works for now
        question.style.display = 'none'; // Disable the question when the timer reaches 0
        progressText.style.display = 'none'; // Disable the progress text when the timer reaches 0
    });
};
getNewQuestion = () => {
    clearRadioButtons();
        if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) { // End the game if there are no more questions or the question counter exceeds the max number of questions
            clearInterval(timerInterval);
            return timeCounter.textContent = "you are done! please save your score";
        }
        questionCounter++;
        progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`; // Update the progress text means the question place in the quiz
        const questionIndex = Math.floor(Math.random() * availableQuestions.length); // Get a random question from the available questions
        
        currentQuestion = availableQuestions[questionIndex]; // Set the current question to the random question we just got
        question.innerText = currentQuestion.question; // Set the question text to the current question
    
        choices.forEach(choice => {
            const number = choice.dataset["number"]; // Get the number of the choice using the data-number attribute that we set in the quizpage.html
            choice.innerText = currentQuestion["choice" + number];
            choice.checked = false; // Uncheck the radio button every time a new question is loaded
        });
    
        availableQuestions.splice(questionIndex, 1); // Remove the current question from the available questions so it doesn't get asked again
        acceptingAnswers = true;
    };
    
    choices.forEach(choice => { // Add an event listener to each choice
        choice.addEventListener("click", e => {
            if(!acceptingAnswers) return;
            acceptingAnswers = false; // Prevent the user from selecting another answer until the current question is answered
    
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset["number"];
    
            const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"; // Check if the selected answer is correct or incorrect and apply the appropriate class
            if (classToApply === "correct") {
                incrementScore(SCORE_POINTS);
            } else {
                timeLeft -= 10;
                timeCounter.classList.add("red"); // Add the red class to the time remining text notifier every time the user selects an incorrect answer
                setTimeout(() => {
                    timeCounter.classList.remove("red"); 
                }, 500); // delaying the removal of the class to 500ms
            }
            selectedChoice.parentElement.classList.add(classToApply); // Add the class to the parent element of the selected choice
            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);// Remove the class after 1 second
                getNewQuestion();
            }, 1000);
        });
    }); 
    function getCandidateName() {
        return window.prompt("Please enter your name:");
      }
      submitBtn.addEventListener("click", function(event) { //an event listener for the save button
        event.preventDefault();
        const candidateName = getCandidateName();
        
        candidate.textContent = "candidate name: " + candidateName; // Display the user name in the result container
        scoreText.textContent ="your current Score: " + score;
        localStorage.setItem("candidateName", candidateName); // this line and the next one Save the user name and score to local storage for testing purposes
        localStorage.setItem("score", score);
        if(score >75 && score <=100){ // Check the score and display the appropriate grade and face reaction
          grade.textContent ="your grade is: 'A'" + AEl + nailedIt;
        } else if(score >=50 && score <=75){
          grade.textContent = "your grade is:  'B'" + BEl + happyFace;
        } else if(score >=25 && score <=49){
          grade.textContent = "your grade is: 'C'" + CEl + mediumFace;
        } else if(score <25){
          grade.textContent = "your grade is: 'D'" + DEl + sadFace;
        }
        quizContainer.style.display = "none"; // Hide the quiz container and show the result container
        resultContainer.style.display = "block";  // then show the result container
   
     });
      
   incrementScore = num => { // Increment the score by the passed in number
         score += num;
    };
 
quizGame();


