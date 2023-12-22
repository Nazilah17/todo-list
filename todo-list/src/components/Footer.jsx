import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {
  const tasks = useSelector((state) => state.tasks.value);

  if (tasks.length === 0) return <footer className="stats mt-6 text-center text-fuchsia-950 text-lg font-semibold">Your list is empty</footer>;
  const totalTasks = tasks.length;
  const checkedTasks = tasks.filter((task) => task.checked).length;
  const percentage = Math.round((checkedTasks / totalTasks) * 100);

  return (
    <footer className="stats mt-6 flex justify-center gap-20 text-fuchsia-950 text-lg font-semibold">
      <span>Total Tasks : {totalTasks}</span>
      <span>
        Task completed : {checkedTasks} ({percentage}%)
      </span>
    </footer>
  );
}
