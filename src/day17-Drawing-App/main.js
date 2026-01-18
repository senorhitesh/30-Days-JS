const toolbar = document.querySelector(".toolbar");
const canvas = document.querySelector("#canvas");
const cxt = canvas.getContext("2d");

const upperHeight = canvas.offsetTop;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - upperHeight;

let isPainting = false;
cxt.lineWidth = 5; // Default size
cxt.lineCap = "round"; // Makes lines look smooth, not blocky

toolbar.addEventListener("change", (e) => {
    if (e.target.id === "stroke") {
        // Assuming your color input has id="stroke"
        cxt.strokeStyle = e.target.value;
    }
    if (e.target.id === "lineWidth") {
        // Assuming your range input has id="lineWidth"
        cxt.lineWidth = e.target.value; 
    }
});

toolbar.addEventListener("click", (e) => {
    if (e.target.id === "clear") {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
    }
});

canvas.addEventListener("mousedown", (e) => {
    isPainting = true;
    
    // IMPORTANT: Start a brand new path so we don't connect to the old lines
    cxt.beginPath(); 
    
    // Move the "pen" to where the mouse clicked (offset handles margins)
    cxt.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("mouseup", (e) => {
    isPainting = false;
    cxt.beginPath(); // Reset path so we don't drag a line to the next click
});

canvas.addEventListener("mousemove", (e) => {
    if (!isPainting) return; // If mouse isn't held down, stop here.

    // Draw line to new position
    cxt.lineTo(e.offsetX, e.offsetY);
    
    // Make the line visible
    cxt.stroke();
});