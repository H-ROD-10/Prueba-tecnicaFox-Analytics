import { useState } from 'react'
import { deleteTask, editTask, updateTaskStatus, listTasks } from '../../services'
import styles from './Card.module.css'
import { TaskStatus } from '../../services/createTask'
import { Task } from '../../services/editTask'



interface CardProps {
  item: {
    id: string
    title: string
    description: string
    status: string
  }
  setItems: React.Dispatch<React.SetStateAction<Task[] | undefined>>
}



export const Card = ({ item, setItems }: CardProps) => {
  const [editMode, setEditMode] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [status, setStatus] = useState(item.status);

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setEditStatus(false)
  }

  const toggleEditStatus = () => {
    setEditStatus(!editStatus);
    setEditMode(false)
  }

  const handleDeleteTask = (id: string) => {
    deleteTask(id);
    const tasks = listTasks()
    setItems(tasks)
  }

  const handleEditTask = (
    id: string,
    newTitle?: string,
    newDescription?: string
  ) => {
    if (!newTitle || !newDescription) {
      alert('Por favor, rellene todos los campos');
      return;
    }
    editTask(id, newTitle, newDescription);
    const tasks = listTasks()
    setItems(tasks)
    toggleEditMode();
  }

  const handleUpdateTaskStatus = (id: string, newStatus: TaskStatus) => {
    updateTaskStatus(id, newStatus);
    const tasks = listTasks()
    setItems(tasks)
    toggleEditStatus();
  }

  return (
    <div className={styles.card_container}>
      {
        editMode ? (
          <>
            <div className={styles.container_input}>
              <span onClick={toggleEditMode}>
                <strong>Nombre de la tarea</strong>
              </span>:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.container_input}>
              <span onClick={toggleEditMode}>
                <strong>Descripción</strong>:
              </span>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={styles.input}
              />
            </div>
          </>
        ) : (
          <>
            <p className={styles.properties} onClick={toggleEditMode}>
              <strong>Nombre de la tarea</strong>: {item.title}
            </p>
            <p className={styles.properties} onClick={toggleEditMode}>
              <strong>Descripción</strong>: {item.description}
            </p>
          </>
        )
      }
      {
        editStatus ? (
          <div className={styles.container_input}>
            <span onClick={toggleEditStatus}>
              <strong>Estado</strong>:
            </span>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={styles.input}
            >
              <option value={TaskStatus.Pendiente}>{TaskStatus.Pendiente}</option>
              <option value={TaskStatus.Finalizado}>{TaskStatus.Finalizado}</option>
            </select>
          </div>
        ) : (
          <>
            <p className={styles.properties} onClick={toggleEditStatus}>
              <strong>Estado</strong>: {item.status}
            </p>
          </>
        )
      }
      <div className={styles.container_button}>
        <button
          type='submit'
          className={styles.delete}
          onClick={() => handleDeleteTask(item.id)}
        >
          Eliminar
        </button>
        <button
          type='submit'
          className={styles.edit}
          onClick={() => handleEditTask(item.id, title, description)}
        >
          Editar
        </button>
        <button
          type='submit'
          onClick={() => handleUpdateTaskStatus(item.id, status as TaskStatus)}
          className={styles.end}
        >
          Terminar
        </button>
      </div>
    </div>
  )
}
