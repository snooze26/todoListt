export function createTodo(text = ""){
    console.log("createTodo called")

    const todoTable = document.querySelector("#list");
    if(!todoTable){
        console.error("Table element not found");
        return;
    };

    const row = document.createElement("tr");
    row.className = "rows";

    //add properties 
    const title = document.createElement("td");
    title.textContent = text.title;
    title.className = "todoCell";

    const description = document.createElement("td");
    description.textContent = text.description;
    description.className = "todoCell";

    const dueDate = document.createElement("td");
    dueDate.textContent = text.dueDate;
    dueDate.className = "todoCell";


    const priority = document.createElement("td");
    priority.textContent = text.priority;
    priority.className = "todoCell";


    const notes = document.createElement("td");
    notes.textContent = text.notes;
    notes.className = "todoCell";


    //add checkbox, edit, delete 
    const checkboxCell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", () => {
        row.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });
    checkboxCell.appendChild(checkbox);

    //add timeStamp 
    const timeStampCell = document.createElement("td");
    timeStampCell.textContent = text.created;
    timeStampCell.classList = "todoCell";


    const editCell = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
        const newTitle = prompt("Edit title:", text.title);
        const newDescription = prompt("Edit description:", text.description);
        const newDueDate = prompt("Edit dueDate:", text.dueDate);
        const newPriority = prompt("Edit priority:", text.priority);
        const newNotes = prompt("Edit notes:", text.notes);

        if(newTitle) title.textContent = newTitle;
        if(newDescription) description.textContent = newDescription;
        if(newDueDate) dueDate.textContent = newDueDate;
        if(priority) priority.textContent = newPriority;
        if(notes) notes.textContent = newNotes; 
    });
    editCell.appendChild(editBtn);
   
    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        row.remove(); 
    })
    deleteCell.appendChild(deleteBtn);

    row.appendChild(title);
    row.appendChild(description);
    row.appendChild(dueDate);
    row.appendChild(priority);
    row.appendChild(notes);
    row.appendChild(checkboxCell);
    row.appendChild(editCell);
    row.appendChild(deleteCell);
    row.appendChild(timeStampCell);

    todoTable.appendChild(row);


}

// export function postFirstTodo