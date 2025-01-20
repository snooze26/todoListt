
export function formValidation () {
    

        const form = document.querySelector("#entryForm"); 
        const title = document.querySelector("#title");
        const dueDate = document.querySelector("#dueDate");
        // const priortity = document.querySelector("#priority");
        // const project = document.querySelector("#project");
        // const notes = document.querySelector("#notes"); 
        
        //tile validation
        title.addEventListener("input", () => {
            if (title.value.trim() === "") {
                title.setCustomValidity("Please enter the title for the task");
            } else {
                title.setCustomValidity("");
            } 
        });

        dueDate.addEventListener("input", () => {
            
            const now = new Date();
            const selectedDate = new Date(dueDate.value);

            if (!dueDate.value || selectedDate.value < now){
                dueDate.setCustomValidity("Please enter a valid date/time");
            } else {
                dueDate.setCustomValidity("");
            };
        });


        // Form validation
        form.addEventListener("submit", (e) => {
            

            if (!title.checkValidity()) {
                e.preventDefault();
                title.reportValidity();

            }
    
            // validate due date 
            const selectedDate = new Date(dueDate.value);
            const now = new Date();

            if (!dueDate.checkValidity() || selectedDate < now) {
                e.preventDefault();
                dueDate.reportValidity();
            }
        });
}



