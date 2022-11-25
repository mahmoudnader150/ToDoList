class Task {
  static latestId = 0;

  constructor(title, description) {
    this.taskId = ++latestId;
    this.taskTitle = title;
    this.taskDescription = description;
  }
}

class ToDoList {
  constructor() {
    this.tasks = [];
  }

  addTask = (task) => {
    this.tasks.push(task);
  };

  markTaskDone = (targetId) => {
    this.tasks = this.tasks.filter((task) => task.taskId !== targetId);
  };

  getTasks = () => {
    return this.tasks;
  };
}
