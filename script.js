const question = document.getElementById("question");
const selectMethod1 = Array.from(document.getElementsByClassName("choice-text"));
const selectMethod2 = Array.from(document.getElementsByClassName("choice-prefix"));
const choices = [...selectMethod1, ...selectMethod2];
const candidate = document.getElementById("candidate");
const scoreText = document.getElementById("score");
const grade = document.getElementById("grade");
const progressText = document.getElementById("progress");
const timeCounter = document.getElementById("time");
const submitBtn = document.getElementById("submit");
const quizContainer = document.querySelector(".quiz-container");
const resultContainer = document.querySelector(".result-container");
const message = document.getElementById("msg");

let AEl = "  Congratulations your nailed it!";
let BEl = "  Congratulations you pass the exam!";
let CEl = "  you need study more";
let DEl = "  Sorry you failed the exam";
let sadFace = "\u{1F622}";
let happyFace = "\uD83D\uDE00";
let mediumFace = "\uD83D\uDE10";
let nailedIt = "\u{1F525}";


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
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
const SCORE_POINTS = 25;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    timeLeft = 30;
    timerInterval = setInterval(() => {
        timeLeft--;
        timeCounter.textContent = `${timeLeft} seconds remaining`;
        if (timeLeft <= 0 || availableQuestions.length === 0) { // End the game if the timer reaches 0 or there are no more questions it seems redundant to check for availableQuestions.length === 0 here since it's already checked in getNewQuestion()
            clearInterval(timerInterval);
            return timeCounter.textContent = "Time is up! please save your score";
        }
        
    }, 1000);
    getNewQuestion();
};

function clearRadioButtons() {
    const radioButtons = document.querySelectorAll('input[type=radio]');
    radioButtons.forEach(radioButton => {
      radioButton.checked = false;
    });
  }

getNewQuestion = () => {
    clearRadioButtons();
        if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
            return timeCounter.textContent = "You have answered all the questions, please save your score";
        }
        questionCounter++;
        progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;
    
        choices.forEach(choice => {
            const number = choice.dataset["number"];
            choice.innerText = currentQuestion["choice" + number];
            choice.checked = false; // Uncheck the radio button every time a new question is loaded
        });
    
        availableQuestions.splice(questionIndex, 1);
        acceptingAnswers = true;
    };
    
    choices.forEach(choice => {
        choice.addEventListener("click", e => {
            if(!acceptingAnswers) return;
            acceptingAnswers = false;
    
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset["number"];
    
            const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
            if (classToApply === "correct") {
                incrementScore(SCORE_POINTS);
            } else {
                timeLeft -= 10;
                timeCounter.classList.add("red"); 
                setTimeout(() => {
                    timeCounter.classList.remove("red"); 
                }, 500); // delaying the removal of the class to 500ms
            }
            selectedChoice.parentElement.classList.add(classToApply);
            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 1000);
        });
    }); 
    function getUserName() {
        return window.prompt("Please enter your name:");
      }
      submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        const userName = getUserName();
        candidate.textContent = "candidate name: " + userName;
        scoreText.textContent ="your current Score: " + score;
        if(score >75 && score <=100){
          grade.textContent ="your grade is: 'A'" + AEl + nailedIt;
        } else if(score >=50 && score <=75){
          grade.textContent = "your grade is:  'B'" + BEl + happyFace;
        } else if(score >=25 && score <=49){
          grade.textContent = "your grade is: 'C'" + CEl + mediumFace;
        } else if(score <25){
          grade.textContent = "your grade is: 'D'" + DEl + sadFace;
        }
        quizContainer.style.display = "none"; // Hide the quiz container and show the result container
        resultContainer.style.display = "block";  
   
     });
      
   incrementScore = num => {
         score += num;
    };
 
startGame();
