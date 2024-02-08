import { generateId } from "../utils";

export enum TaskStatus {
  'Pendiente' = 'Sin Terminar',
  'Finalizado' = 'Terminado',
}

export function createTask(
  title: string,
  description: string,
  status: TaskStatus
) {
  const id = generateId();
  const newTask = { id, title, description, status };
  const tasks = JSON.parse(localStorage.getItem('tasks') as string) || [];
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}