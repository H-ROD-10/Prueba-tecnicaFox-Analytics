import { Card, FormTasks } from "./components"
import './App.css'
import { Task } from "./services/editTask"
import { useEffect, useState } from "react"
import { listTasks } from "./services/LisTask"


function App() {
  const [items, setItems] = useState<Task[]>()



  useEffect(() => {
    const tasks = listTasks()
    setItems(tasks)
  }, [items?.length])

  return (
    <div className="container">
      <div>
        <h1 className="title">Crear Tareas</h1>
        <FormTasks setItems={setItems} />

      </div>
      <div>
        <h1 className="subtitle">Lista de Tareas</h1>
        {
          items && items?.length > 0 ?
            items?.map((item, i) => (
              <Card
                key={item.title + i}
                item={item}
                setItems={setItems}
              />
            ))
            : <p>No hay tareas</p>
        }
      </div>
    </div>
  )
}

export default App
