export default function Task({ task, onDeleteTask, onCheckTask }) {
  return (
    <li key={task.id}>
      <input type="checkbox" checked={task.checked} onChange={() => onCheckTask(task.id)} />
      <span style={task.checked ? { textDecoration: "line-through" } : {}}>{task.activity}</span>
      <button onClick={() => onDeleteTask(task.id)}>&times;</button>
    </li>
  );
}
