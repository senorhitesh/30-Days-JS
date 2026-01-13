import { StorageService } from "./db.js";

let Jaddu = new StorageService();

let textField = document.querySelector("#editor");
let clearBrn = document.querySelector("#clearBtn");
let status = document.querySelector("#status");

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args); // Execute the function after the delay
    }, delay);
  };
}
function setExpiry(){
  Jaddu.setExpiry("myvalue",textField.value, 5000);
}

const SettledDebounce = debounce((e)=>{
  setExpiry(e.target.value)
},1000) 


textField.addEventListener("input", SettledDebounce )
clearBrn.addEventListener("click",function(){
  Jaddu.getExpiry("myvalue")
})

clearBrn.addEventListener("click", function(){
  Jaddu.clear("myvalue");       // 1. Delete from storage
  textField.value = "";         // 2. Clear the UI
  status.textContent = "Draft Cleared"; // 3. Feedback
});