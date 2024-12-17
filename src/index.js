import {retrieveTodo, toDo} from "./createToDo_Logic.js";
import { createTodo } from "./createToDo_DOM.js";
import { add, getTime } from "/date-fns"; 


document.addEventListener("DOMContentLoaded", () =>{

    const addButton = document.querySelector("#addTodo");
if(addButton){
    
    addButton.addEventListener("click", () => {
        const usersToDo = retrieveTodo();
    
        if(usersToDo){
            createTodo(usersToDo);
        }
    })

} else {
    console.error("Add button not found");
}

const now = new Date();
console.log(`Current timestamp: ${getTime(now)}`);

});
