export function formValidation() {
    const form = document.querySelector("#entryForm");
    const title = document.querySelector("#title");
    const dueDate = document.querySelector("#dueDate");
    const priority = document.querySelector("#priority");
    const project = document.querySelector("#project");

    // Title validation
    title.addEventListener("input", () => {
        if (title.value.trim() === "") {
            title.setCustomValidity("Please enter the title for the task.");
        } else {
            title.setCustomValidity("");
        }
    });

    // Due date validation
    dueDate.addEventListener("input", () => {
        const now = new Date();
        const selectedDate = new Date(dueDate.value);

        if (!dueDate.value || selectedDate < now) {
            dueDate.setCustomValidity("Please enter a valid date/time.");
        } else {
            dueDate.setCustomValidity("");
        }
    });

    // Priority validation
    priority.addEventListener("change", () => {
        if (!priority.value || priority.value === "select") {
            priority.setCustomValidity("Please select a priority level.");
        } else {
            priority.setCustomValidity("");
        }
    });

    // Project validation
    project.addEventListener("input", () => {
        if (project.value.trim() === "") {
            project.setCustomValidity("Please enter a project name.");
        } else {
            project.setCustomValidity("");
        }
    });

    // Form validation on submit
    form.addEventListener("submit", (e) => {
        let isValid = true;

        // Validate title
        if (!title.value.trim()) {
            isValid = false;
            title.setCustomValidity("Please enter the title for the task.");
            title.reportValidity();
        } else {
            title.setCustomValidity("");
        }

        // Validate due date
        const now = new Date();
        const selectedDate = new Date(dueDate.value);
        if (!dueDate.value || selectedDate < now) {
            isValid = false;
            dueDate.setCustomValidity("Please enter a valid future date/time.");
            dueDate.reportValidity();
        } else {
            dueDate.setCustomValidity("");
        }

        // Validate priority
        if (!priority.value || priority.value === "select") {
            isValid = false;
            priority.setCustomValidity("Please select a priority level.");
            priority.reportValidity();
        } else {
            priority.setCustomValidity("");
        }

        // Validate project
        if (!project.value.trim()) {
            isValid = false;
            project.setCustomValidity("Please enter a project name.");
            project.reportValidity();
        } else {
            project.setCustomValidity("");
        }

        // Prevent form submission if any field is invalid
        if (!isValid) {
            e.preventDefault();
            console.log("Form submission prevented due to validation errors.");
        }
    });
}
