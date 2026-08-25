import { useState } from 'react'
import "./Task.css"
import pencil from "../../assets/pencil.png";
import trash from "../../assets/trash.png";

function Task({ title , id, dltFunc}) {

    const [isDeleting, setIsDeleting] = useState(false)

    return (
        <>
            <div className={`full-task ${isDeleting ? "deleting" : ""}`} onAnimationEnd={() => {if (isDeleting) dltFunc(id)}}>
                <div className="task-core">
                    <h2 className="task-title">
                        {title}
                    </h2>
                </div>
                <div className="task-options">
                    <div className="task-edit-button">
                        <img src={pencil} alt="pen"/>
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