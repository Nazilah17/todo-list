import React, { useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "./redux/tasks/tasksSlice";
import "./App.css";

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
      <div className="container">
        <Form />
        <TaskList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
