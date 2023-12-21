export default function Footer({ tasks }) {
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
