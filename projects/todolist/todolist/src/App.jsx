import { useState } from 'react'
import './App.css'
import Task from './Components/Task/Task'

function App() {

  const [tasks, setTasks] = useState([{ title: "Example Task", desc: "No description yet" }])

  return (
    <>
      <div className="tasks-container">
        <h1 className='title'>Task List</h1>
        {
          tasks.map((t, index) => {
            return (
              <Task key={index} title={t.title} description={t.desc}></Task>
            )
          })
        }
      </div>
      <div className='tasks-input-container'>

      </div>
    </>
  )
}

export default App
