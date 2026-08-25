import { useState } from 'react'
import "./Task.css"
import pencil from "../../assets/pencil.png";
import tick from "../../assets/tick.png";
import trash from "../../assets/trash.png";


function Task({ title , id, dltFunc}) {

    const [isDeleting, setIsDeleting] = useState(false)

    const [isEditing, setIsEditing] = useState(false)

    const [ttl, setTitle] = useState(title)

    const handleEdit = () => {
        if(ttl.trim() === "") return
        setIsEditing(!isEditing)
    }

    return (
        <>
            <div className={`full-task ${isDeleting ? "deleting" : ""}`} onAnimationEnd={() => {if (isDeleting) dltFunc(id)}}>
                <div className="task-core">
                    {isEditing && <input className="task-edit-input" type="text" placeholder="Title cannot be empty"  value={ttl} onChange={(e) => setTitle(e.target.value)} />}
                    {!isEditing && <h2 className="task-title">{ttl}</h2>}
                </div>
                <div className="task-options">
                    <div className="task-edit-button" onClick={handleEdit}>
                        <img src={isEditing ? tick : pencil} alt="pen"/>
                    </div>
                    <div className="task-delete-button" onClick={() => {setIsDeleting(true)}}>
                        <img src={trash} alt="trash"/>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Task