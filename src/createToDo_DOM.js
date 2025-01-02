export function createTodo(text = ""){
    console.log("createTodo called")

    const todoTable = document.querySelector("#list");
    if(!todoTable){
        console.error("Table element not found");
        return;
    };

    const row = document.createElement("tr");
    row.className = "rows";

    //add properties with headers 

    //title field
    const title = document.createElement("td");
    const titleHeader = document.createElement("h3");
    titleHeader.textContent = "Title";
    title.appendChild(titleHeader);
    const titleContent = document.createElement("span");
    title.appendChild(titleContent);
    titleContent.textContent = text.title;
    title.className = "todoCell";

    //description field 
    const description = document.createElement("td");
    const descriptionHeader = document.createElement("h3");
    descriptionHeader.textContent = "Description"
    description.appendChild(descriptionHeader);
    const descriptionContent = document.createElement("span");
    description.appendChild(descriptionContent);
    descriptionContent.textContent = text.description;
    description.className = "todoCell";

    //dueDate field 
    const dueDate = document.createElement("td");
    const dueDateHeader = document.createElement("h3");
    dueDateHeader.textContent = "Due Date";
    dueDate.appendChild(dueDateHeader);
    const dueDateContent = document.createElement("span");
    dueDate.appendChild(dueDateContent);
    dueDateContent.textContent = text.dueDate;
    dueDate.className = "todoCell";

    //priority field
    const priority = document.createElement("td");
    const priorityHeader = document.createElement("h3");
    priorityHeader.textContent = "Priority Level";
    priority.appendChild(priorityHeader);
    const priorityContent = document.createElement("span");
    priority.appendChild(priorityContent);
    priorityContent.textContent = text.priority;
    priority.className = "todoCell";

    //notes field
    const notes = document.createElement("td");
    const notesHeader = document.createElement("h3");
    notesHeader.textContent = "Notes";
    notes.appendChild(notesHeader);
    const notesContent = document.createElement("span");
    notes.appendChild(notesContent);
    notesContent.textContent = text.notes;
    notes.className = "todoCell";


    //checkbox field 
    const checkboxCell = document.createElement("td");
    const checkboxHeader = document.createElement("h3");
    checkboxHeader.textContent = "Completed?";
    checkboxCell.appendChild(checkboxHeader);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", () => {
        row.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });
    checkboxCell.appendChild(checkbox);

    //timeStamp field 
    const timeStampCell = document.createElement("td");
    const timeStampHeader = document.createElement("h3");
    timeStampHeader.textContent = "Created: ";
    timeStampCell.appendChild(timeStampHeader);
    const timeStampContent = document.createElement("span");
    timeStampContent.textContent = text.created;
    timeStampCell.appendChild(timeStampContent);
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

