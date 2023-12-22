import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkTask, deleteTask } from "../redux/tasks/tasksSlice";
import EditForm from "./EditForm";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";

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
          <div className="bg-fuchsia-800 rounded-md flex justify-between my-6 h-12">
            <div className="flex">
              <div className="flex items-center pl-4">
                <input className="w-4 h-4 accent-fuchsia-800" type="checkbox" checked={task.checked} onChange={handleCheckTasks} />
              </div>
              <span className="text-white inline-flex items-center w-72 ml-3" style={task.checked ? { textDecoration: "line-through", color: "white" } : {}}>
                {task.activity}
              </span>
            </div>
            <div className="px-3 flex items-center gap-3">
              {!task.checked && (
                <button onClick={handleEditClick}>
                  <img src={EditIcon} alt="Edit" className="w-5" />
                </button>
              )}
              <button onClick={handleDeleteTasks}>
                <img src={DeleteIcon} alt="Delete" className="w-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </li>
  );
}
