import {retrieveTodo, toDo} from "./createToDo_Logic.js";
import { createTodo } from "./createToDo_DOM.js";
import { Project } from "./project_Logic.js";
import { createTableHeaders } from "./createTableHeaders.js";
// import { getTime } from "date-fns"; 


document.addEventListener("DOMContentLoaded", () =>{
    createTableHeaders();
    createTodo({
        title: "Sample Todo",
        description: "This is a description.",
        dueDate: "2025-01-20",
        priority: "High",
        project: "Project Alpha",
        notes: "Some notes.",
        created: new Date().toLocaleString(),
    })
});
