import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

const initialTasks = [];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(task) {
    setTasks([...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleCheckTask(id) {
    setTasks((tasks) => tasks.map((task) => (task.id === id ? { ...task, checked: !task.checked } : task)));
  }

  function handleClearTasks() {
    setTasks([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onCheckTask={handleCheckTask} onClearTasks={handleClearTasks} />
      <Footer tasks={tasks} />
    </div>
  );
}

export default App;
