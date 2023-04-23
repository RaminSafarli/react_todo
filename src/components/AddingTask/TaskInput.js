import Button from "../UI/Button";
import { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./TaskInput.css";

function TaskInput({ setTask, tasks }) {
  const [addedTask, setAddedTask] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const changeHandler = (event) => {
    setIsEmpty(false);
    setAddedTask(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (addedTask.trim().length === 0) {
      setIsEmpty(true);
      return;
    }
    const newTask = { text: addedTask, id: Math.random() };
    setTask((previousTasks) => [...previousTasks, newTask]);
    setAddedTask("");
  };

  return (
    <form className="task-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Write your task"
        value={addedTask}
        onChange={changeHandler}
      />
      {isEmpty ? <span>This have to be filled!</span> : <span></span>}
      <Button>
        <FontAwesomeIcon icon={faPlus} />
        <span>Add your task</span>
      </Button>
    </form>
  );
}

export default TaskInput;
