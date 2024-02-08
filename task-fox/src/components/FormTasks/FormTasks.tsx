import { useForm, SubmitHandler } from "react-hook-form"
import styles from './FormTasks.module.css'
import { createTask, listTasks } from "../../services"
import { TaskStatus } from "../../services/createTask"
import { Task } from "../../services/editTask"

interface DataProps {
  title: string
  description: string
}

type Props = {
  setItems: React.Dispatch<React.SetStateAction<Task[] | undefined>>
}
export const FormTasks = ({ setItems }: Props) => {
  const { handleSubmit, register, formState: { errors }, reset } = useForm<DataProps>()

  const onSubmit: SubmitHandler<DataProps> = (data) => {
    createTask(data.title, data.description, TaskStatus.Pendiente)
    const tasks = listTasks()
    setItems(tasks)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <div className={styles.container_input}>
        <input
          type="text"
          className={styles.input}
          placeholder="Tarea"
          {...register("title", {
            required: true,
          })}
        />
        {
          errors.title && <span className={styles.errors}>Este campo es requerido</span>
        }
      </div>
      <div className={styles.container_input}>
        <input
          type="text"
          className={styles.input}
          placeholder="Descripción"
          {...register("description", {
            required: true,
          })}

        />
        {
          errors.description && <span className={styles.errors}>Este campo es requerido</span>
        }
      </div>
      <button
        type="submit"
        className={styles.button}
      >
        Crear
      </button>
    </form>
  )
}
