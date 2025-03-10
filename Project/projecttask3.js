const tasks = [
    { description: "Study AI Engineering", priority: "Medium", dueDate: "02/25/2025" },
    { description: "Data Science Practice", priority: "Medium", dueDate: "02/28/2025" },
    { description: "CS50 AI with Python", priority: "Medium", dueDate: "03/05/2025" },
    { description: "School Work", priority: "High", dueDate: "02/20/2025" },
    { description: "Workout", priority: "High", dueDate: "Daily" },
    { description: "Stretch", priority: "Low", dueDate: "Daily" }
  ];
  
  function isValidDate(dateString) {
    return /^\d{2}\/\d{2}\/\d{4}$/.test(dateString);
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
    let description;
    do {
      description = prompt("Enter task description:");
      if (!description || description.trim() === "") alert("Task description cannot be empty!");
    } while (!description || description.trim() === "");
    
    let priority;
    do {
      priority = prompt("Enter priority (High, Medium, Low):").trim();
      if (!["High", "Medium", "Low"].includes(priority)) alert("Invalid priority! Choose High, Medium, or Low.");
    } while (!["High", "Medium", "Low"].includes(priority));
    
    let dueDate;
    do {
      dueDate = prompt("Enter due date (MM/DD/YYYY or 'Daily'):").trim();
      if (dueDate !== "Daily" && !isValidDate(dueDate)) alert("Invalid date format! Use MM/DD/YYYY.");
    } while (dueDate !== "Daily" && !isValidDate(dueDate));
    
    tasks.push({ description, priority, dueDate });
    alert("Task added successfully!");
  }
  
  function removeTask() {
    if (tasks.length === 0) {
      alert("No tasks to remove!");
      return;
    }
    
    viewTasks();
    let taskNumber;
    do {
      taskNumber = parseInt(prompt("Enter the number of the task to remove:"), 10);
      if (isNaN(taskNumber) || taskNumber < 1 || taskNumber > tasks.length) {
        alert("Invalid task number! Please enter a valid number.");
      }
    } while (isNaN(taskNumber) || taskNumber < 1 || taskNumber > tasks.length);
    
    tasks.splice(taskNumber - 1, 1);
    alert("Task removed successfully!");
  }
  
  function main() {
    let choice;
    do {
      choice = parseInt(prompt("\nWhat would you like to do?\n1. View tasks\n2. Add a task\n3. Remove a task\n4. Exit\nEnter your choice:"), 10);
      switch (choice) {
        case 1:
          viewTasks();
          break;
        case 2:
          addTask();
          break;
        case 3:
          removeTask();
          break;
        case 4:
          alert("Exiting program. Here are your remaining tasks:");
          viewTasks();
          break;
        default:
          alert("Invalid choice. Please try again.");
      }
    } while (choice !== 4);
  }
  
  main();
  