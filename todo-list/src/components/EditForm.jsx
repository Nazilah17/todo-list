import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/tasks/tasksSlice";

export default function EditForm({ task, onCancel }) {
  const [editedActivity, setEditedActivity] = useState(task.activity);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (!editedActivity) return;

    dispatch(editTask({ id: task.id, editedActivity }));

    const updatedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // dispatch(setTasks(updatedTasks));

    onCancel();
  }

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder="edit here..." value={editedActivity} onChange={(e) => setEditedActivity(e.target.value)} />
      </div>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );
}
