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


