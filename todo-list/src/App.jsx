import React, { useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "./redux/tasks/tasksSlice";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.value);

  useEffect(() => {
    dispatch(setTasks(tasks));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, dispatch]);

  return (
    <div className="app">
      <Header />
      <Form />
      <TaskList />
      <Footer />
    </div>
  );
}

export default App;
