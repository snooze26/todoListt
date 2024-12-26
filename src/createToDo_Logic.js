import { format } from "./node_modules/date-fns/index.js"; 


export class toDo {
    constructor(title, description, dueDate, priority, notes, created){
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
    const title = prompt("Enter the title:");
    if(!title) return null;

    const description = prompt("Enter the description");
    if(!description) return null;

    const dueDate = prompt("When is this due?");
    if(!dueDate) return null;
    
    const priority = prompt("Rate the level of priority: High, Medium, Low");
    if(!priority) return (null);

    const notes = prompt("Insert any notes");
    if(!notes) return (null);

    const now = new Date();
    const timeStamp = format(now, "yyyy-MM-dd HH:mm");

    console.log(timeStamp);

    return new toDo(title, description, dueDate, priority, notes, timeStamp);
}




// export function toDoForm() { 
//     //get values 
//     const title = document.querySelector("#title").value;
//     const description = document.querySelector("#description").value;
//     const dueDate = document.querySelector("#dueDate").value;
//     const priortity = document.querySelector("#priortity").value;
//     const notes = document.querySelector("#notes").value; 
//     const now = new Date();
//     const timeStamp = format(now, "yyyy-MM-dd HH:mm");

//     //create Todo 
//     const newTodo = new toDo(title, description, dueDate, priortity, notes, timeStamp);
//     console.log(newTodo);

// }
document.addEventListener("DOMContentLoaded", () =>{ 
    const addTodo = document.querySelector("#addTodo");
const form = document.querySelector("#entryForm"); 


    addTodo.addEventListener("click", () => {
        form.style.display = form.style.display === "block" ? "none" : "block";
    });

    form.addEventListener("submit", function(e){
        e.preventDefault();


        const title = document.querySelector("#title").value;
        const description = document.querySelector("#description").value;
        const dueDate = document.querySelector("#dueDate").value;
        const priortity = document.querySelector("#priority").value;
        const notes = document.querySelector("#notes").value; 
        const now = new Date();
        const timeStamp = format(now, "yyyy-MM-dd HH:mm");

        //create Todo 
        const newTodo = new toDo(title, description, dueDate, priortity, notes, timeStamp);
        console.log(newTodo);

        form.reset();
        form.style.display = "none";

        });
    });







