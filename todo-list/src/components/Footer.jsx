import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {
  const tasks = useSelector((state) => state.tasks.value);

  if (tasks.length === 0) return <footer className="stats mt-6 text-center text-fuchsia-950 text-lg font-semibold">Your list is empty</footer>;
  const totalTasks = tasks.length;
  const checkedTasks = tasks.filter((task) => task.checked).length;
  const percentage = Math.round((checkedTasks / totalTasks) * 100);

  return (
    <footer className="stats mt-6 text-center gap-10 text-fuchsia-950 sm:text-lg text-xs font-semibold">
      <span className="items-center">Total Tasks : {totalTasks}</span>
      <span>
        <br />
        Task completed : {checkedTasks} ({percentage}%)
      </span>
    </footer>
  );
}
