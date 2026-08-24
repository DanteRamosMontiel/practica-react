import "./Task.css"
import pencil from "../../assets/pencil.png";
import trash from "../../assets/trash.png";

function Task({ title }) {
    return (
        <>
            <div className="full-task">
                <div className="task-core">
                    <h2 className="task-title">
                        {title}
                    </h2>
                </div>
                <div className="task-options">
                    <div className="task-edit-button">
                        <img src={pencil} alt="pen"/>
                    </div>
                    <div className="task-delete-button">
                        <img src={trash} alt="trash"/>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Task