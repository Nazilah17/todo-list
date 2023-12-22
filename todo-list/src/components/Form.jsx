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
      <h3 className="text-center text-lg text-white mb-5">What's on your list today?</h3>
      <div className="flex justify-between px-4">
        <input
          type="text"
          placeholder="add here . . ."
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="w-64 h-10 mr-3 rounded-md border-0 bg-white/5 px-3.5 py-2 placeholder-white/30 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-800 sm:text-sm sm:leading-6"
        />
        <button className="rounded-md bg-fuchsia-800 mb-8 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-700">
          Add
        </button>
      </div>
    </form>
  );
}
