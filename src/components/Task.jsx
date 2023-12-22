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
          <div className="bg-fuchsia-800 rounded-md flex justify-between sm:my-5 mx-2 my-4 sm:h-12 h-10">
            <div className="flex">
              <div className="flex items-center sm:pl-4 pl-2">
                <input className="sm:w-4 w-2.5 sm:h-10 h-3 accent-fuchsia-800" type="checkbox" checked={task.checked} onChange={handleCheckTasks} />
              </div>
              <span className="text-white inline-flex items-center sm:w-72 w-32 sm:ml-3 ml-2 sm:text-base text-xs truncate" style={task.checked ? { textDecoration: "line-through", color: "white" } : {}}>
                {task.activity}
              </span>
            </div>
            <div className="px-3 flex items-center gap-3">
              {!task.checked && (
                <button onClick={handleEditClick}>
                  <img src={EditIcon} alt="Edit" className="sm:w-5 w-2.5" />
                </button>
              )}
              <button onClick={handleDeleteTasks}>
                <img src={DeleteIcon} alt="Delete" className="sm:w-5 w-2.5" />
              </button>
            </div>
          </div>
        </>
      )}
    </li>
  );
}
