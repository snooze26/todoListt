export function createTodo(text = ""){
    console.log("createTodo called")

    const todoTable = document.querySelector("#list");
    if(!todoTable){
        console.error("Table element not found");
        return;
    };

    const row = document.createElement("tr");
    row.className = "rows";

    const createCell = (headerText, contextText) => {
        const cell = document.createElement("td");
        const header = document.createElement("h3");
        header.textContent = headerText; 
        cell.appendChild(header);
        const content = document.createElement("span");
        content.textContent = contextText || "";
        cell.appendChild(content);
        cell.className = "todoCell";
        return cell; 
    };

    row.appendChild(createCell("Title", text.title));
    row.appendChild(createCell("Description", text.description));
    row.appendChild(createCell("Due Date", text.dueDate));
    row.appendChild(createCell("Priority Level", text.priority));
    row.appendChild(createCell("Project", text.project));
    row.appendChild(createCell("Notes", text.notes));

    
    //timeStamp
    row.appendChild(createCell("Created", text.created));

    const checkBoxCell = document.createElement("td");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const checkBoxHeader = document.createElement("h3");
    checkBoxHeader.textContent = "Completed";

    checkBox.addEventListener("click", () => {
        row.style.textDecoration = checkBox.checked ? "line-through" : "none";
    });

    checkBoxCell.appendChild(checkBoxHeader);
    checkBoxCell.appendChild(checkBox); 
    
    row.appendChild(checkBoxCell);

    //edit 
    const editCell = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
        const newTitle = prompt("Edit title:", text.title);
        if (newTitle) row.querySelector("td:nth-child(1) span").textContent = newTitle;

        const newDescription = prompt("Edit discription:", text.description);
        if (newDescription) row.querySelector("td:nth-child(2) span").textContent = newDescription;

        const newDueDate = prompt("Edit due date:", text.dueDate);
        if (newDueDate) row.querySelector("td:nth-child(3) span").textContent = newDueDate;

        const newPriority = prompt("Edit priority level:", text.priority);
        if (newPriority) row.querySelector("td:nth-child(4) span").textContent = newPriority;

        const newProject = prompt("Edit Project:", text.project);
        if (newProject) row.querySelector("td:nth-child(5) span").textContent = newProject;

        const newNotes = prompt("Edit notes:", text.notes);
        if (newNotes) row.querySelector("td:nth-child(6) span").textContent = newNotes;




    });
    editCell.appendChild(editBtn);
    row.appendChild(editCell);


    //delete
    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        row.remove(); 
    })
    deleteCell.appendChild(deleteBtn);
    row.appendChild(deleteCell);


    //add to row
    todoTable.appendChild(row);


}


console.log(createTodo());