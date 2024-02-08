

export function listTasks() {
  return JSON.parse(localStorage.getItem('tasks') as string) || [];
}