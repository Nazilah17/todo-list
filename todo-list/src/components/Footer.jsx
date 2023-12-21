import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {
  const tasks = useSelector((state) => state.tasks.value);

  if (tasks.length === 0) return <footer className="stats">Daftar belanjaan masih kosong</footer>;
  const totalTasks = tasks.length;
  const checkedTasks = tasks.filter((task) => task.checked).length;
  const percentage = Math.round((checkedTasks / totalTasks) * 100);

  return (
    <footer className="stats">
      Ada {totalTasks} tugas lagi di daftarmu, {checkedTasks} tugas sudah diselesaikan ({percentage}%)
    </footer>
  );
}
