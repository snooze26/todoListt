import {retrieveTodo, toDo} from "./createToDo_Logic.js";
import { createTodo } from "./createToDo_DOM.js";
import {getTime} from "./date-fns"; 



const addButton = document.querySelector("#addTodo");
addButton.addEventListener("click", () => {
    const usersToDo = retrieveTodo();

    if(usersToDo){
        createTodo(usersToDo);
    }
})

const now = new Date();
console.log(`Current timestamp: ${getTime(now)}`);