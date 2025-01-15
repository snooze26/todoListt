export function createTableHeaders() {

    const todoTable = document.querySelector("#list");
    if(!todoTable){
        console.error("Table element not found");
        return;
    };

    if (todoTable.querySelector("thead")) return;

    const headerRow = document.createElement("tr");

    const headers = [
        "Title", "Description", "Due Date", "Project", "Priority Level",
        "Notes", "Completed", "Edit", "Delete", "Created" 
    ];

    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText; 
        headerRow.appendChild(th);
    });

    const thead = document.createElement("thead");
    thead.appendChild(headerRow);
    todoTable.appendChild(thead);

}