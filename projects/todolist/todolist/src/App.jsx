import { useState } from 'react'
import './App.css'
import Task from './Components/Task/Task'
import TaskInput from "./Components/TaskInput/TaskInput"

function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (title, id) => {
    const newTaskList = [...tasks, { title: title, id: id }]
    setTasks(newTaskList)
  }

  const deleteTask = (id) => {
    const newTaskList = tasks.filter(task => task.id !== id)
    setTasks(newTaskList)
  }

  const editTask = (title, id) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        tasks[i].title = title
        break
      }
    }
    setTasks([...tasks])
  }

  return (
    <>
      <h1 className='title'>Task List</h1>
      <div className="tasks-container">
        {
          tasks.map((t) => {
            return (
              <Task key={t.id} id={t.id} title={t.title} dltFunc={deleteTask}></Task>
            )
          })
        }
      </div>
      <div className='tasks-input-container'>
        <TaskInput addTask={addTask}></TaskInput>
      </div>
    </>
  )
}

export default App