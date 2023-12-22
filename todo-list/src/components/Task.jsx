import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkTask, deleteTask } from "../redux/tasks/tasksSlice";
import EditForm from "./EditForm";

export default function Task({ task }) {
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);

  const handleCheckTasks = () => {
    dispatch(checkTask(task.id));
  };

  const handleDeleteTasks = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleEditFormCancel = () => {
    setShowEditForm(false);
  };

  return (
    <li key={task.id}>
      {showEditForm ? (
        <EditForm task={task} onCancel={handleEditFormCancel} />
      ) : (
        <>
          <input type="checkbox" checked={task.checked} onChange={handleCheckTasks} />
          <span style={task.checked ? { textDecoration: "line-through" } : {}}>{task.activity}</span>
          <button onClick={handleEditClick}>🖊</button>
          <button onClick={handleDeleteTasks}>&times;</button>
        </>
      )}
    </li>
  );
}
