import { toDo } from "./createToDo_Logic.js";
import { format } from "./node_modules/date-fns/index.js";


export class Project {
    constructor(projectName, description, created){
        this.name = projectName;
        this.todos = [];
        this.description = description;
        this.created = created; 
    };

    //add toDo 
    addToDo(todo) {
        //checking if todo is a todo by checking prototype
        if(todo instanceof toDo) {
            this.todos.push(todo);
            console.log(`Added ${todo.title} to ${this.name}`);
        } else { 
            console.error("Invalid object");
        }
    };

    //display toDo
    storeTodo() {
        console.log(`Project: "${this.name}"`);
        
        //check to see if array is empty if so throw error, if not diplayInfo of toDo
        if(this.todos.length === 0){
            console.error("There is no Todos in this project");
        } else {
            this.todos.forEach(todo => todo.displayInfo());
        };

    };

    static createProject() {
        const name = prompt("Project Name: ");
        if(!name) return null;
        
        const description = prompt("Description: ");
        if(!description) return null;

        const now = new Date();
        const created = format(now, "yyyy-MM-dd HH:mm");
        if(!created) return null; 

        return new Project (name, description, created);
    }



    // //remove toDo function
    // removeTodDo(todoTitle){
    //     this.todos = this.todos.filter(todo => todo.title !== todoTitle);
    // }

    //extendTodo(todo){

} 



