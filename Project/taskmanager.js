let tasks = [];

function showMenu() {
    return prompt(
        "Task Manager Menu:\n" +
        "1. View all tasks\n" +
        "2. Add a task\n" +
        "3. Remove a task\n" +
        "4. Exit\n\n" +
        "Enter your choice (1-4):"
    );
}

function viewTasks() {
    if (tasks.length === 0) {
        alert("No tasks to display!");
        return;
    }

    let taskList = "Current Tasks:\n";
    for (let i = 0; i < tasks.length; i++) {
        taskList += `${i + 1}. ${tasks[i]}\n`;
    }
    alert(taskList);
}

function addTask() {
    let newTask = prompt("Enter the new task:");
    if (newTask !== null && newTask.trim() !== "") {
        tasks.push(newTask);
        alert("Task added successfully!");
    } else {
        alert("Task cannot be empty!");
    }
}


function removeTask() {
    if (tasks.length === 0) {
        alert("No tasks to remove!");
        return;
    }

    let taskList = "Current Tasks:\n";
    for (let i = 0; i < tasks.length; i++) {
        taskList += `${i + 1}. ${tasks[i]}\n`;
    }

    let taskNumber = prompt(taskList + "\nEnter the task number to remove (1-" + tasks.length + "):");
    taskNumber = parseInt(taskNumber);

    if (isNaN(taskNumber) || taskNumber < 1 || taskNumber > tasks.length) {
        alert("Invalid task number!");
    } else {
        tasks.splice(taskNumber - 1, 1);
        alert("Task removed successfully!");
    }
}

function runTaskManager() {
    let running = true;

    while (running) {
        let choice = showMenu();

        switch (choice) {
            case "1":
                viewTasks();
                break;
            case "2":
                addTask();
                break;
            case "3":
                removeTask();
                break;
            case "4":
                alert("Thank you for using Task Manager!");
                running = false;
                break;
            default:
                alert("Invalid choice! Please enter a number between 1 and 4.");
        }
    }
}

runTaskManager();