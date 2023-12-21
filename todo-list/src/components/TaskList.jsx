import React, { useState } from "react";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { clearTasks } from "../redux/tasks/tasksSlice";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks.value);
  const [filterTasks, setFilterTasks] = useState("all");
  const dispatch = useDispatch();

  const handleClearTasks = () => {
    dispatch(clearTasks());
  };

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
            <Task task={task} key={task.id} />
          ))}
        </ul>
      </div>
      <div className="clear">
        <button onClick={handleClearTasks}>Bersihkan Daftar</button>
      </div>
    </>
  );
}
