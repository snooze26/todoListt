import { add, format } from "./node_modules/date-fns/index.js"; 
import { Project } from "./project_Logic.js";


export class toDo {
    constructor(title, description, dueDate, priority, notes, created){
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes; 
        this.created = created;
    }

    displayInfo(){
        console.log(`${this.title} | ${this.description} | due by ${this.dueDate} | the priority level is ${this.priority}`);

    }
}

export function retrieveTodo() {
    
    const title = document.querySelector("#title").value;
    if(!title) return null;

    const description = document.querySelector("#description").value;
    if(!description) return null;

    const dueDate = document.querySelector("#dueDate").value;
    if(!dueDate) return null;
    
    const priority = document.querySelector("#priority").value;
    if(!priority) return (null);

    const notes = document.querySelector("#notes").value;
    if(!notes) return (null);

    const now = new Date();
    const timeStamp = format(now, "yyyy-MM-dd HH:mm");

    console.log(title);

    return new toDo(title, description, dueDate, priority, notes, timeStamp);
}


//todoForm 
document.addEventListener("DOMContentLoaded", () => {
    const todoFormDiv = document.querySelector("#todoFormDiv")
    const todoForm = document.querySelector("#toDoForm");
    console.log(todoForm);
    const addButton = document.querySelector("#addTodo");
    console.log(addButton);
    
    const project = new Project(); 
    
    addButton.addEventListener("click", () => {
        todoFormDiv.style.display = "block"; 
    });
    
    todoForm.addEventListener("submit", (event) => {
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
        todoFormDiv.style.display = "none"; 
        todoForm.reset();
    
        project.storeTodo();
    });

    const projects = [];

function addProject(projectName) {
    const newProject = new Project(projectName);
    projects.push(newProject);

    //adding new project to list 
    const selectProject = document.querySelector("#selectProject");
    //new option in select menu with project name 
    const option = document.createElement("option");
    option.value = newProject.id; //assigning id 
    option.textContent = newProject.name;
    selectProject.appendChild(option);

    console.log(`Project "${projectName.name}" added.`);

}

const testProject = new Project ("Test Project", "To see if this shit works");

console.log(addProject(testProject));

})


