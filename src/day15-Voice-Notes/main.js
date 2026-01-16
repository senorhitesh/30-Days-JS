// Browser compatibility
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Speech Recognition is not supported in this browser");
}

const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.continuous = false;
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// Elements
const content = document.querySelector("#content");
const micbtn = document.querySelector("#mic-btn");
const copyBtn = document.querySelector("#copy-btn");
const clearBtn = document.querySelector("#clear-btn");
const pauseBtn = document.querySelector("#pause-btn");
const status = document.querySelector(".status");

// Start recording
micbtn.addEventListener("click", () => {
  status.textContent = "Listening...";
  recognition.start();
});

// Pause recording
pauseBtn.addEventListener("click", () => {
  recognition.stop();
  status.textContent = "Recording paused";
});

// Speech result
recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  content.textContent += transcript + " ";
  status.textContent = "Speech captured";
};

// Error handling
recognition.onerror = (event) => {
  status.textContent = `Error: ${event.error}`;
};

// Copy text
copyBtn.addEventListener("click", () => {
  if (!content.textContent.trim()) {
    alert("Pehle kuch bolo");
    return;
  }
  navigator.clipboard.writeText(content.textContent);
  status.textContent = "Text copied";
});

// Clear text
clearBtn.addEventListener("click", () => {
  if (!content.textContent.trim()) {
    alert("Kuch hai hi nahi clear karne ke liye");
    return;
  }
  content.textContent = "";
  status.textContent = "Content cleared";
});
