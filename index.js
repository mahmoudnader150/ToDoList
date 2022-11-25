import { ToDoList } from "./todolist.js";
import { Task } from "./task.js";

const todolist = new ToDoList();

todolist.addTask(new Task("first task", "my first task"));
todolist.addTask(new Task("second task", "my second task"));

console.log("My tasks:");
console.log(todolist.getTasks());

console.log("Deleted task 2");
todolist.markTaskDone(2);

console.log("My tasks:");
console.log(todolist.getTasks());

console.log("Deleted task 1");
todolist.markTaskDone(1);

console.log("My tasks:");
console.log(todolist.getTasks());