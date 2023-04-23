import TaskInput from "./TaskInput";

import "./TaskForm.css";

function TaskAdd({ setTask, tasks }) {
  return (
    <div className="form-wrp">
      <TaskInput tasks={tasks} setTask={setTask} />
    </div>
  );
}

export default TaskAdd;
