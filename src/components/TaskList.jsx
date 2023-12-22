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
      <div className="filter flex justify-between text-white sm:text-sm text-xxs sm:mb-10 mb-5 mx-2">
        <button onClick={() => setFilterTasks("all")} className="bg-fuchsia-800 sm:w-28 w-16 sm:h-12 h-7 shadow-lg rounded-3xl hover:bg-fuchsia-600 focus:bg-fuchsia-600">
          All
        </button>
        <button onClick={() => setFilterTasks("active")} className="bg-fuchsia-800 sm:w-28 w-16 sm:h-12 h-7 shadow-lg rounded-3xl hover:bg-fuchsia-600 focus:bg-fuchsia-600">
          Active
        </button>
        <button onClick={() => setFilterTasks("completed")} className="bg-fuchsia-800 sm:w-28 w-16 sm:h-12 h-7 shadow-lg rounded-3xl hover:bg-fuchsia-600 focus:bg-fuchsia-600">
          Completed
        </button>
      </div>
      <div className="list">
        <ul>
          {filteredTasks.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </ul>
      </div>
      <div className="clear flex justify-center">
        <button onClick={handleClearTasks} className="bg-fuchsia-800 sm:px-8 px-4 py-2 sm:text-base text-xs text-white shadow-lg rounded-md mb-3 hover:bg-fuchsia-600">
          Clear All
        </button>
      </div>
    </>
  );
}
