import "./TaskItem.css";
import {
  faCheck,
  faTrash,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function TaskItem({ text, onDeleteClick, id }) {
  const [isDone, setIsDone] = useState(false);

  const onDoneClick = () => {
    if (isDone === false) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  };

  const deleteHandler = () => {
    console.log(id);
    onDeleteClick(id);
  };

  return (
    <div className="list-wrp">
      <li className={`task-list-item ${isDone ? "task-done" : ""}`}>{text}</li>
      <div className="list-actions">
        {isDone ? (
          <FontAwesomeIcon
            icon={faRotateLeft}
            className="check"
            onClick={() => onDoneClick()}
          />
        ) : (
          <FontAwesomeIcon
            icon={faCheck}
            className="check"
            onClick={() => onDoneClick()}
          />
        )}

        <FontAwesomeIcon
          icon={faTrash}
          className="trash"
          onClick={deleteHandler}
        />
      </div>
    </div>
  );
}

export default TaskItem;
