class Task {
  static latestId = 0;

  constructor(title, description) {
    this.taskId = ++Task.latestId;
    this.taskTitle = title;
    this.taskDescription = description;
  }
}

export { Task };
