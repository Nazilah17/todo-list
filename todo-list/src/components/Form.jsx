import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasks/tasksSlice";

export default function Form() {
  const [activity, setActivity] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (!activity) return;

    const newTask = { activity, checked: false, id: Date.now() };

    dispatch(addTask(newTask));

    setActivity("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What's on your list today?</h3>
      <div>
        <input type="text" placeholder="add here..." value={activity} onChange={(e) => setActivity(e.target.value)} />
      </div>
      <button>Tambah</button>
    </form>
  );
}
