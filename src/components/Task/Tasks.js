import TaskItem from "./TaskItem";

import "./Tasks.css";

function Tasks({ items, onDeleteClick }) {
  return (
    <div className="task-wrp">
      <ul className="task-list">
        {items.map((item) => (
          <TaskItem
            key={item.id}
            text={item.text}
            onDeleteClick={onDeleteClick}
            id={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
