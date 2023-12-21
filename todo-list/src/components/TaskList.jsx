import { useState } from "react";
import Task from "./Task";

export default function TaskList({ tasks, onDeleteTask, onCheckTask, onClearTasks }) {
  const [filterTasks, setFilterTasks] = useState("all");

  let filteredTasks;

  if (filterTasks === "all") {
    filteredTasks = tasks;
  }

  if (filterTasks === "active") {
    filteredTasks = tasks.filter((task) => !task.checked);
  }

  if (filterTasks === "completed") {
    filteredTasks = tasks.filter((task) => task.checked);
  }

  return (
    <>
      <div className="filter">
        <button onClick={() => setFilterTasks("all")}>All</button>
        <button onClick={() => setFilterTasks("active")}>Active</button>
        <button onClick={() => setFilterTasks("completed")}>Completed</button>
      </div>
      <div className="list">
        <ul>
          {filteredTasks.map((task) => (
            <Task task={task} key={task.id} onDeleteTask={onDeleteTask} onCheckTask={onCheckTask} />
          ))}
        </ul>
      </div>
      <div className="clear">
        <button onClick={onClearTasks}>Bersihkan Daftar</button>
      </div>
    </>
  );
}
