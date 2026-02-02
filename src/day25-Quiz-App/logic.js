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
        question: "Best Prime Minister of India?",
        options: ["Modiji", "Melodiji", "Rahul Ji", "Yogi Ji"],
        correct: "Modiji"
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
    nextBtn.innerHTML = "Next";
    controls.classList.add("hidden");
    showQuestion();
}

// 2. SHOW QUESTION (The Magic Function) 
function showQuestion() {
    resetState(); // Clear old buttons & timer
    
    // Get current question data based on index
    let currentQuestion = quizData[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    
    // Update Text
    questionText.innerHTML = questionNo + ". " + currentQuestion.question;

    // Create Buttons Dynamically (Looping!)
    currentQuestion.options.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer;
        
        // Add Tailwind classes for styling
        button.classList.add("btn", "bg-gray-700", "text-white", "p-3", "rounded-md", "hover:bg-gray-600", "transition");
        
        answerButtons.appendChild(button);
        
        // Attach Click Event
        button.addEventListener("click", selectAnswer);
        
        // Tag the correct answer hiddenly
        if(answer === currentQuestion.correct){
            button.dataset.correct = "true";
        }
    });

    startTimer();
}

// 3. RESET STATE (Clean up before next question)
function resetState() {
    clearInterval(timerId); // Stop old timer
    time = 15;
    timeLeft.textContent = time;
    controls.classList.add("hidden"); // Hide Next button
    
    // Remove all old buttons
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// 4. CHECK ANSWER
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if(isCorrect){
        selectedBtn.classList.add("bg-green-500"); // Turn Green
        score++;
    } else {
        selectedBtn.classList.add("bg-red-500"); // Turn Red
    }

    // Show Correct Answer automatically (UX best practice)
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("bg-green-500");
        }
        button.disabled = true; // Freeze all buttons
    });

    controls.classList.remove("hidden"); // Show Next Button
    clearInterval(timerId); // Stop timer
}

// 5. HANDLE NEXT BUTTON
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < quizData.length){
        showQuestion();
    } else {
        showScore();
    }
});

// 6. SHOW SCORE (Game Over)
function showScore() {
    resetState();
    questionText.innerHTML = `Padhle Bkl !`;
    nextBtn.innerHTML = "Abhi bhi Dekh Raha hai";
    controls.classList.remove("hidden");
    nextBtn.addEventListener("click", startQuiz); // Loop back to start
}

// 7. TIMER LOGIC
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
