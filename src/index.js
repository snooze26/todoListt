import {createTodo, toDo} from "./createToDo_Logic.js";
import { postTodo } from "./createToDo_DOM.js";
import { Project } from "./project_Logic.js";
import { createTableHeaders } from "./createTableHeaders.js";
// import { add } from "date-fns";
// import { getTime } from "date-fns"; 


const addButton = document.querySelector("#addTodo");
console.log(addButton);

document.addEventListener("DOMContentLoaded", () =>{   

    addButton.addEventListener("click", () => {
         const toDo = createTodo();
         console.log(toDo);
    });
});
