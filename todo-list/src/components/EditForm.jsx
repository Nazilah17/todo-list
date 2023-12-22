import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/tasks/tasksSlice";
import CancelIcon from "../assets/cancel.svg";

export default function EditForm({ task, onCancel }) {
  const [editedActivity, setEditedActivity] = useState(task.activity);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (!editedActivity) return;

    dispatch(editTask({ id: task.id, editedActivity }));

    const updatedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    onCancel();
  }

  return (
    <form className="edit-form flex h-13 my-6 items-center" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="edit here..."
          value={editedActivity}
          onChange={(e) => setEditedActivity(e.target.value)}
          className="w-72 h-12 rounded-l-md border-0 bg-white/5 px-3.5 py-2 placeholder-white/30 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-800 sm:text-sm sm:leading-6"
        />
      </div>
      <button
        type="button"
        onClick={onCancel}
        className="bg-fuchsia-800 h-12 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-700"
      >
        <img src={CancelIcon} alt="cancel" className="w-3" />
      </button>
      <button
        type="submit"
        className="rounded-r-md h-12 bg-fuchsia-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-700"
      >
        Save
      </button>
    </form>
  );
}
