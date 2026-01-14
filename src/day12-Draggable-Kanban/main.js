const tasks = document.querySelectorAll(".task");
const columns = document.querySelectorAll(".column"); 

tasks.forEach(task => {
    task.addEventListener("dragstart", () => {
        task.classList.add("dragging");
    });

    task.addEventListener("dragend", () => {
        task.classList.remove("dragging");
    });
});

columns.forEach(column => {

    column.addEventListener("dragover", (e) => {
        e.preventDefault(); 
        column.style.backgroundColor = "#333";
    });

    column.addEventListener("dragleave", () => {
        column.style.backgroundColor = ""; 
    });

    column.addEventListener("drop", (e) => {
       
         e.preventDefault();
        const currentTask = document.querySelector(".dragging");
        column.appendChild(currentTask);
        column.style.backgroundColor = "";
    });
});