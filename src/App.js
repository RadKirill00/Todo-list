import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";
import "./index.css"

function App() {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    const taskTodo = {
      id: Math.random(),
      value: todo,
      status: false,
    };
    setTasks((prevTasks) => [taskTodo, ...prevTasks]);
    setTodo("");
  }

  function deleteTask(id) {
    let del = tasks.filter((e) => e.id !== id);
    setTasks(del);
  }

  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((e) =>
        e.id === id ? { ...e, status: !e.status } : { ...e }
      )
    );
  }

  const taskTodoList = tasks.map((e) => (
    <Task
      key={e.id}
      id={e.id}
      value={e.value}
      status={e.status}
      deleteTask={deleteTask}
      toggleTask={toggleTask}
    />
  ));

  return (
    <div className="App">
      <Header />
      <Input addTask={addTask} setTodo={setTodo} todo={todo} className="input" />
      <div className="taskTodoList1">{taskTodoList}</div>
    </div>
  );
}

export default App;


