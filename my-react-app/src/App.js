import React, { useState } from "react";
import { tasks } from "./data";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { greeting, user } from "./data";

function App() {
  const [myTasks, setMyTasks] = useState(tasks);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const addItem = {
      id: myTasks.length + 1,
      title: e.target.taskName.value,
      status: "In progress",
    };
    setMyTasks((prevState) => [...prevState, addItem]);
  };

  return (
    <div className="App">
      <h1>
        {greeting} {user}
      </h1>

      <TaskForm handleFormSubmit={handleFormSubmit} />
      <TaskList tasks={myTasks} />
    </div>
  );
}

export default App;
