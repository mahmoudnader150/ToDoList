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

export { ToDoList };
