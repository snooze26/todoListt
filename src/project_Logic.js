export class Project {
    constructor(projectName){
        this.name = projectName;
        this.todos = [];
    };

    //add toDo function
    addToDo(todo){
        this.todos.push(todo);
        console.log(testProject, "here is test project!!");

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

