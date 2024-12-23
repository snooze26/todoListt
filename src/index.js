import {toDo} from "./createToDo_Logic.js";
import { createTodo } from "./createToDo_DOM.js";
import { Project } from "./project_Logic.js";
// import { getTime } from "date-fns"; 


// document.addEventListener("DOMContentLoaded", () =>{

//     // const addButton = document.querySelector("#addTodo");
//     // const userToDo = retrieveTodo();

//     // if(userToDo){
//     //     createTodo(userToDo); 
        
//     // }

// // const now = new Date();
// // console.log(`Current timestamp: ${getTime(now)}`);

// const testProject = new Project("Test Project");

// const testAdd = new toDo("Test", "test", "test", "test", "test", "test");

// if (testAdd){
//     testProject.addToDo(testAdd);
// };
// testProject.addToDo(testAdd);

// const testAdd2 = retrieveTodo();
// testProject.addToDo(testAdd2);

// testProject.displayTodo();

// });
const todoFormDiv = document.querySelector("#todoFormDiv")
const todoForm = document.querySelector("#toDoForm");
const addButton = document.querySelector("#addTodo");

const project = Project.createProject(); 

addButton.addEventListener("click,", () => {
    todoFormDiv.style.display = "block"; 
});

todoForm.addEventListener("submit", () => {
    event.preventDefault();
    //capture values 

    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#dueDate").value;
    const priority = document.querySelector("#priority").value;
    const notes = document.querySelector("#notes").value;
    const now = new Date();
    const timeStamp = format(now, "yyyy-MM-dd HH:mm");

    const newTodo = new toDo(title, description, dueDate, priority, notes, timeStamp);

    //add newTodo to project 
    project.addToDo(newTodo);

    //clear toDo form 
    todoFormDiv.display.stlye = "none"; 
    todoForm.reset();

    project.storeTodo();
});



