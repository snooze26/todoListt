import { format } from "./node_modules/date-fns/index.js"; 
import { toDo } from "./createToDo_Logic.js";

export function showForm() {
    const addTodo = document.querySelector("#addTodo");
    const form = document.querySelector("#entryForm"); 
    

        addTodo.addEventListener("click", () => {
            console.log("Button clicked");
            form.style.display = form.style.display === "none" || form.style.display ? "block" : "none";
            console.log("Form display after toggle:", form.style.display);

        });
    
        form.addEventListener("submit", function(e){
            e.preventDefault();
    
    
            const title = document.querySelector("#title").value;
            const description = document.querySelector("#description").value;
            const dueDate = document.querySelector("#dueDate").value;
            const priortity = document.querySelector("#priority").value;
            const project = document.querySelector("#project").value;
            const notes = document.querySelector("#notes").value; 
            const now = new Date();
            const timeStamp = format(now, "yyyy-MM-dd HH:mm");
    
            //create Todo 
            const newTodo = new toDo(title, description, dueDate, priortity, project, notes, timeStamp, );
            console.log(newTodo);
    
            form.reset();
            form.style.display = "none";
        });        
}
