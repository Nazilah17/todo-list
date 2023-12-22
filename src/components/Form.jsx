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
    <form className="add-form mb-8" onSubmit={handleSubmit}>
      <h3 className="text-center sm:text-lg text-sm text-white py-5">What's on your list today?</h3>
      <div className="flex justify-between sm:px-4 px-2">
        <input
          type="text"
          placeholder="add here . . ."
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="sm:w-64 w-36 sm:h-10 h-8 sm:mr-11 mr-3 rounded-md border-0 bg-white/5 sm:px-3.5 px-1.5 sm:py-2 sm:text-base text-sm placeholder-white/30 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-800"
        />
        <button className="rounded-md bg-fuchsia-800 sm:px-8 px-4 sm:py-2.5 sm:text-sm text-xs sm:font-semibold text-white shadow-lg hover:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-700">
          Add
        </button>
      </div>
    </form>
  );
}
