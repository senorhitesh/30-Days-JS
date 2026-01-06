import {saveToStorage, getFromStorage, DeleteStroage} from './stroage.js'

//Select Element 
const notesInput = document.getElementById("input-notes");
const createBtn = document.querySelector(".createNotes");
const notesDiv = document.querySelector(".notes-div");

const notes = getFromStorage('my-notes')

function render(){
    notesDiv.innerHTML = '';

    notes.forEach((notess, index) => {
        
        const card = document.createElement("div")
        card.classList.add("note");

        const para = document.createElement("p");
        para.textContent = notess;

        const delBtn = document.createElement("button")
        delBtn.textContent = `X`
        delBtn.classList.add("delete")
        delBtn.onclick = ()=>{
            notes.splice(index,1);
            saveToStorage('my-notes', notes);
            render()
        }
        card.appendChild(delBtn);
        card.appendChild(para);
        notesDiv.appendChild(card);

    });
}

createBtn.addEventListener("click", function(){
    const text = notesInput.value
    if (text === "") return alert("Please write a note!");
     
    notes.push(text);
    saveToStorage('my-notes', notes);
    render();
})
notesInput.addEventListener("keydown",(e)=>{
    if(e.key === 'Enter'){
        createBtn.click();
    }
})

render();