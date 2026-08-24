import { useState } from 'react'
import './App.css'
import Task from './Components/Task/Task'
import TaskInput from "./Components/TaskInput/TaskInput"

function App() {

  const [tasks, setTasks] = useState([])
  
  const addTask = (title) => {
    const newTaskList = [...tasks, {title}]
    setTasks(newTaskList)
  }

  return (
    <>
      <h1 className='title'>Task List</h1>
      <div className="tasks-container">
        {
          tasks.map((t, index) => {
            return (
              <Task key={index} title={t.title}></Task>
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
