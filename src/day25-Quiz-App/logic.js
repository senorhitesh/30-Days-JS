const quizData = [
    {
        question: "National Animal of India?",
        options: ["Lion", "Elephant", "Tiger", "Peacock"],
        correct: "Tiger"
    },
    {
        question: "Highest Mountain of World?",
        options: ["K2", "Himalayas", "Everest", "Alps"], // Correct is actually Everest inside Himalayas range, but let's keep it simple
        correct: "Everest"
    },
    {
        question: "Best Framework for Frontend?",
        options: ["Angular", "Vue", "React", "JQuery"],
        correct: "React"
    }
];


// Selectors
const questionText = document.querySelector("#question-text");
const answerButtons = document.querySelector("#answer-buttons");
const nextBtn = document.querySelector("#next-btn");
const controls = document.querySelector("#controls");
const timeLeft = document.querySelector("#time-left");

// Game State
let currentQuestionIndex = 0;
let score = 0;
let time = 15;
let timerId;

// 1. START QUIZ
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.classList.remove("hidden")
    showQuestions();
}

function showQuestion() {
    resetState(); 

    let currentQuestion = quizData[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionText.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.options.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer;

        button.classList.add("btn", "bg-gray-700", "text-white", "p-3", "rounded-md", "hover:bg-gray-600", "transition");

        answerButtons.appendChild(button);

        button.addEventListener("click", selectAnswer);

        if (answer === currentQuestion.correct) {
            button.dataset.correct = "true";
        }
    });

    startTimer();
}

function resetBtn(){
    clearInterval(timerId)
    time = 15;
    timeLeft.textContent = time;
    controls.classList.add("hidden");

    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("bg-green-500");
        score++;
    }
    else{
        selectedBtn.classList.add("bg-red-700")
    }


}

nextBtn.addEventListener("click", ()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex <quizData.length){
        showQuestion();
    }
    else{
        showResult();
    }
})

function showScore() {
    resetState();
    questionText.innerHTML = `You scored ${score} out of ${quizData.length}!`;
    nextBtn.innerHTML = "Play Again";
    controls.classList.remove("hidden");
    nextBtn.addEventListener("click", startQuiz); // Loop back to start
}

function startTimer() {
    timerId = setInterval(() => {
        time--;
        timeLeft.textContent = time;
        if (time <= 0) {
            clearInterval(timerId);
            // Auto-move to next or reveal answer?
            // Let's just reveal answer and force user to click Next
            Array.from(answerButtons.children).forEach(button => {
                if(button.dataset.correct === "true"){
                   button.classList.add("bg-green-500");
                }
                button.disabled = true;
            });
            controls.classList.remove("hidden");
        }
    }, 1000);
}

// Start the game!
startQuiz();