export type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
};


export function editTask(id: string, newTitle?: string, newDescription?: string) {
  const tasks = JSON.parse(localStorage.getItem('tasks') as string) || [];
  const taskIndex = tasks.findIndex((task: Task) => task.id === id);
  if (taskIndex !== -1) {
    tasks[taskIndex].title = newTitle;
    tasks[taskIndex].description = newDescription;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}