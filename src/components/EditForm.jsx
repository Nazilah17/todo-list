import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/tasks/tasksSlice";
import CancelIcon from "../assets/cancel.svg";
import PropTypes from "prop-types";

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
    <form className="edit-form flex sm:h-13 h-10 my-6 items-center justify-center" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="edit here..."
          value={editedActivity}
          onChange={(e) => setEditedActivity(e.target.value)}
          className="sm:w-72 w-32 sm:h-12 h-10 rounded-l-md border-0 bg-white/5 px-3.5 py-2 placeholder-white/30 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-800 sm:text-sm text-xs sm:leading-6"
        />
      </div>
      <button
        type="button"
        onClick={onCancel}
        className="bg-fuchsia-800 sm:h-12 h-10 sm:px-6 px-2 sm:py-2.5 py-1 sm:text-sm text-xs font-semibold text-white shadow-sm hover:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-700"
      >
        <img src={CancelIcon} alt="cancel" className="sm:w-3 w-2.5" />
      </button>
      <button
        type="submit"
        className="rounded-r-md sm:h-12 h-10 bg-fuchsia-800 sm:px-3.5 px-1.5 sm:py-2.5 py-1 sm:text-sm text-xs sm:font-semibold font-medium text-white shadow-sm hover:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-700"
      >
        Save
      </button>
    </form>
  );
}

EditForm.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    activity: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
  onCancel: PropTypes.func.isRequired,
};
