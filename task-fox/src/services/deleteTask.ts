import { Task } from './editTask';
export function deleteTask(id: string) {
  console.log('id', id)
  let tasks = JSON.parse(localStorage.getItem('tasks') as string) || [];
  tasks = tasks.filter((task: Task) => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}