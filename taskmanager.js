
let tasks = [];

function addTask(task) {
    if (typeof task !== "string" || task.trim() === "") {
        console.log("Error: Task cannot be empty.");
        return;
    }

    tasks.push(task.trim());
    console.log("Task added: " + task.trim());
}

function displayTasks() {
    console.log("\nMy Task List:");

    tasks.forEach((task, index) => {
        console.log((index + 1) + ". " + task);
    });
}

// Test the Add Task functionality
addTask("Complete university assignment");
addTask("Study Git and GitHub");
addTask("Finish Lab 3");

displayTasks();

addTask("");