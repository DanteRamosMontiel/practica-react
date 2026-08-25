import { useState } from "react"
import "./TaskInput.css"

let lastId = 0

function TaskInput({ addTask }) {
    const [value, setValue] = useState("")

    function handleClick() {
        if (value.trim() === "") return
        const ttl = value.charAt(0).toUpperCase() + value.slice(1)
        addTask(ttl, lastId + 1)
        lastId += 1
        setValue("")
    }

    return (
        <div className="task-input-container">
            <input
                className="new-task-input"
                placeholder="New task title"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleClick()
                }}
            />
            <button onClick={handleClick} className="new-task-button">Add Task</button>
        </div>
    )
}

export default TaskInput