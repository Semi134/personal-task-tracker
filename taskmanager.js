
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

function deleteTask(task) {
    const index = tasks.indexOf(task);

    if (index === -1) {
        console.log("Error: Task not found.");
        return;
    }

    tasks.splice(index, 1);
    console.log("Task deleted: " + task);
}

addTask("");
console.log("\nDeleting a task:");
deleteTask("Study Git and GitHub");

displayTasks();