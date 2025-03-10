const tasks = [
    { description: "Study AI Engineering", priority: "Medium", dueDate: "02/25/2025" },
    { description: "Data Science Practice", priority: "Medium", dueDate: "02/28/2025" },
    { description: "CS50 AI with Python", priority: "Medium", dueDate: "03/05/2025" },
    { description: "School Work", priority: "High", dueDate: "02/20/2025" },
    { description: "Workout", priority: "High", dueDate: "Daily" },
    { description: "Stretch", priority: "Low", dueDate: "Daily" }
  ];
  
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
    tasks.forEach((task, index) => {
      taskList += `${index + 1}. [${task.priority}] ${task.description} (Due: ${task.dueDate})\n`;
    });
    alert(taskList);
  }
  
  function addTask() {
    const description = prompt("Enter task description:");
    const priority = prompt("Enter priority (High, Medium, Low):");
    const dueDate = prompt("Enter due date (MM/DD/YYYY or 'Daily'):");
  
    if (description && priority && dueDate) {
      tasks.push({ description, priority, dueDate });
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
    tasks.forEach((task, index) => {
      taskList += `${index + 1}. [${task.priority}] ${task.description} (Due: ${task.dueDate})\n`;
    });
  
    let taskNumber = parseInt(prompt(taskList + "\nEnter the task number to remove:"), 10);
    if (!isNaN(taskNumber) && taskNumber > 0 && taskNumber <= tasks.length) {
      tasks.splice(taskNumber - 1, 1);
      alert("Task removed successfully!");
    } else {
      alert("Invalid task number!");
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
  