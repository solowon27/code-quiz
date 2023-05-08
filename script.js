const question = document.getElementById("question");
const opt1 = Array.from(document.getElementsByClassName("choice-text"));
const opt2 = Array.from(document.getElementsByClassName("choice-prefix"));
const choices = [...opt1, ...opt2];
const scoreText = document.getElementById("score");
const progressText = document.getElementById("progress");
const timeCounter = document.getElementById("time");
const userName = document.getElementById("name");


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
    timeLeft = 60;
    timerInterval = setInterval(() => {
        timeLeft--;
        timeCounter.textContent = `${timeLeft} seconds remaining`;
        if (timeLeft <= 0 || availableQuestions.length === 0) {
            clearInterval(timerInterval);
            return;
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
            localStorage.setItem('your latest score', score);
            return window.alert("You have completed the quiz! Your score is " + score + " out of 100!");
        }
        questionCounter++;
        progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;
    
        choices.forEach(choice => {
            const number = choice.dataset["number"];
            choice.innerText = currentQuestion["choice" + number];
            choice.checked = false; // Uncheck the radio button
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
    
    
   incrementScore = num => {
         score += num;
            scoreText.innerText = 'Your-score: ' + score;
    };
startGame();