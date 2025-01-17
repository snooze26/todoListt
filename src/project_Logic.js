import { toDo } from "./createToDo_Logic.js";

export class Project {
    constructor(projectName){
        this.name = projectName;
        this.todos = [];
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
    storeTodo(){
        console.log(`Project: "${this.name}"`);
        
        //check to see if array is empty if so throw error, if not diplayInfo of toDo
        if(this.todos.length === 0){
            console.error("There is no Todos in this project");
        } else {
            this.todos.forEach(todo => todo.displayInfo());
        };

    };

    get length(){
        return this.todos.length;
    }

    // //remove toDo function
    // removeTodDo(todoTitle){
    //     this.todos = this.todos.filter(todo => todo.title !== todoTitle);
    // }

    //extendTodo(todo){




} 


