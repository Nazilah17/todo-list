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
    <div>
      <Header />
      <div className="mx-auto box-border w-fit sm:p-4 bg-fuchsia-950 rounded-xl shadow-xl shadow-fuchsia-950/50">
        <Form />
        <TaskList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
