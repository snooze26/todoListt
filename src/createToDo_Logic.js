import { format } from "./node_modules/date-fns/index.js"; 


export class toDo {
    constructor(title, description, dueDate, project, priority, notes, created, ){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project; 
        this.notes = notes; 
        this.created = created;
    }

    displayInfo(){
        console.log(`${this.title} | ${this.description} | due by ${this.dueDate} | the priority level is ${this.priority}`);

    }
}

export function createTodo() {
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

    const project = prompt("Project: ");
    if(!project) return (null);
    
    return new toDo(title, description, dueDate, priority, notes, timeStamp, project);
}


