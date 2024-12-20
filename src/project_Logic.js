import { retrieveTodo } from "./createToDo_Logic";

export class Project {
    constructor(projectName){
        this.name = projectName;
        this.todos = [];
    };

    //add toDo function
    addToDo(todo) {
        //checking if todo is a todo by checking prototype
        if(todo instanceof toDo) {
            this.todos.push(todo);
            console.log(`Add ${todo.title} to ${this.name}`);
        } else { 
            console.error("Invalid object");
        }
    };

    //remove toDo function
    removeTodDo(todoTitle){
        this.todos = this.todos.filter(todo => todo.title !== todoTitle);
    }

    //extendTodo(todo){

    //display toDo information 


} 

const testProject = new Project("Test");

const testAdd = new toDo("Test", "test", "test", "test", "test", "test");

testProject.addToDo(testAdd);

