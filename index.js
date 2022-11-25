class Task {
  constructor(title, description) {
    this.taskTitle = title;
    this.taskDescription = description;
    this.done = false;
  }
}

class ToDoList {
  constructor() {
    this.tasks = [];
  }

  addTask = (task) => {
    this.tasks.push(task);
  };

  getTasks = () => {
    return this.tasks;
  };
}