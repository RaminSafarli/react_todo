import TaskForm from "./components/AddingTask/TaskForm";
import Tasks from "./components/Task/Tasks";
import { useState } from "react";

import "./App.css";

function App() {
  let tasksList = [];

  const [tasks, setTask] = useState(tasksList);

  const onDeleteClick = (taskId) => {
    setTask((prevTasks) => {
      const newTasks = prevTasks.filter((task) => task.id !== taskId);
      return newTasks;
    });
  };

  return (
    <div className="app-wrp">
      <h1>To-do app</h1>
      <TaskForm items={tasks} setTask={setTask} />
      <Tasks items={tasks} onDeleteClick={onDeleteClick} />
    </div>
  );
}

export default App;
