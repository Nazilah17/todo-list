import React from "react";
import { useDispatch } from "react-redux";
import { checkTask, deleteTask } from "../redux/tasks/tasksSlice";

export default function Task({ task }) {
  const dispatch = useDispatch();

  const handleCheckTasks = () => {
    dispatch(checkTask(task.id));
  };

  const handleDeleteTasks = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li key={task.id}>
      <input type="checkbox" checked={task.checked} onChange={handleCheckTasks} />
      <span style={task.checked ? { textDecoration: "line-through" } : {}}>{task.activity}</span>
      <button onClick={handleDeleteTasks}>&times;</button>
    </li>
  );
}
