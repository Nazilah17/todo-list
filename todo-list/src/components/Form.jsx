import { useState } from "react";

export default function Form({ onAddTask }) {
  const [activity, setActivity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!activity) return;

    const newTask = { activity, checked: false, id: Date.now() };

    onAddTask(newTask);

    console.log(newTask);

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
