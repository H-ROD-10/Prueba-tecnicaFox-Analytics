import { TaskStatus } from "./createTask";
import { Task } from "./editTask";

export function updateTaskStatus(id: string, newStatus: TaskStatus) {
  const tasks = JSON.parse(localStorage.getItem('tasks') as string) || [];
  const taskIndex = tasks.findIndex((task: Task) => task.id === id);
  if (taskIndex !== -1) {
    tasks[taskIndex].status = newStatus;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}