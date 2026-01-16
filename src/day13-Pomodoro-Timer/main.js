let timeLeft = 1500; 
let interval;

const startBtn = document.querySelector("#start-btn")
const resetBtn = document.querySelector("#reset-btn")

const work = document.querySelector("#work-btn");
const shortBreak = document.querySelector("#short-break-btn");
const longBreak = document.querySelector("#long-break-btn");

const timer = document.querySelector("#timer");

const updateTimer = () => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60; 

    timer.textContent = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
};

const startTimer = () => {
    if (interval) return; 

    interval = setInterval(() => {
        timeLeft--; 
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time Up");
        }
    }, 1000);
};

// 4. STOP / RESET
const stopTimer = () => {
    clearInterval(interval);
};

const resetTimer = () => {
    stopTimer();
    timeLeft = 1500; 
    updateTimer();
};

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

work.addEventListener("click", function() {
    stopTimer(); 
    timeLeft = 1500; 
    updateTimer();
});

shortBreak.addEventListener("click", function() {
    stopTimer();
    timeLeft = 300; 
    updateTimer();
});

longBreak.addEventListener("click",function(){
    stopTimer();
    timeLeft = 900;
    updateTimer();
});