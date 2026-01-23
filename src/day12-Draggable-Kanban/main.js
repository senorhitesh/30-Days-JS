const columns = document.querySelectorAll(".column");

function createTaskElement(text) {
    const task = document.createElement("div");
    task.classList.add("task");
    task.draggable = true;
    task.innerText = text;

    task.addEventListener("dragstart", () => {
        task.classList.add("dragging");
    });

    task.addEventListener("dragend", () => {
        task.classList.remove("dragging");
    });

    return task;
}

function saveBoard() {
    const boardState = {
        todo: [],
        progress: [],
        done: []
    };

    document.querySelectorAll("#todo .task").forEach(t => boardState.todo.push(t.innerText));
    document.querySelectorAll("#progress .task").forEach(t => boardState.progress.push(t.innerText));
    document.querySelectorAll("#done .task").forEach(t => boardState.done.push(t.innerText));

    localStorage.setItem("kanban-board", JSON.stringify(boardState));
}

function loadBoard() {
    const savedData = localStorage.getItem("kanban-board");
    
    let data = {
        todo: ["Fix Navigation Bug", "Design Homepage"],
        progress: [],
        done: []
    };

    if (savedData) {
        data = JSON.parse(savedData);
    }

    columns.forEach(col => {
        const title = col.querySelector("h3");
        col.innerHTML = ""; 
        col.appendChild(title);
    });

    data.todo.forEach(text => document.getElementById("todo").appendChild(createTaskElement(text)));
    data.progress.forEach(text => document.getElementById("progress").appendChild(createTaskElement(text)));
    data.done.forEach(text => document.getElementById("done").appendChild(createTaskElement(text)));
}

loadBoard();

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
        
        saveBoard();
    });
});