import {retrieveTodo, toDo} from "./createToDo_Logic.js";
import { createTodo } from "./createToDo_DOM.js";



const addButton = document.querySelector("#addTodo");
addButton.addEventListener("click", () => {
    const usersToDo = retrieveTodo();

    if(usersToDo){
        createTodo(usersToDo);
    }
})