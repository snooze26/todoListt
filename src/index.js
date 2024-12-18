import {retrieveTodo, toDo} from "./createToDo_Logic.js";
import { createTodo } from "./createToDo_DOM.js";
// import { getTime } from "date-fns"; 


document.addEventListener("DOMContentLoaded", () =>{

    const addButton = document.querySelector("#addTodo");
    const userToDo = retrieveTodo();

    if(userToDo){
        createTodo(userToDo); 
        
    }

// const now = new Date();
// console.log(`Current timestamp: ${getTime(now)}`);

});
