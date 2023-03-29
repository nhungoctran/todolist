import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";
import AddTaskForm from "./AddTaskForm";

function App() {
  //state list of tasks
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS ccc", status: 1 },
    { id: "task_2", title: "Code a todo list", status: 1 },
  ]);

  //state show imcomplete
  const [showIncomplete, setShowIncomplete] = useState(false);

  //state text new task
  const [newTask, setNewTask] = useState("333");

  const handleSubmit = (e) => {
    e.preventDefault(); // chặn refresh trang
    if (newTask) {
      const task = {
        id: Date.now(), // mục đích tạo id unique
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]); // technique để copy lại task cũ và add task mới ở list
      setNewTask("");
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setNewTask(e.target.value);
  };

  const chosenTasks = showIncomplete
    ? tasks.filter((task) => task.status !== 1)
    : tasks;

  //tại sao bấm show incomplete thì nó ko check ngay?
  //   const handleIncomplete = (e) => {
  //   e.preventDefault();
  //   setShowIncomplete(e.target.checked);
  // };

  // handle event change status of task into checked or not
  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
        }
        return task;
      })
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <Header
        title="To do list"
        subTitle="Get things done, one item at a time."
      />
      <TaskList
        chosenTasks={chosenTasks}
        showIncomplete={showIncomplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        setShowIncomplete={setShowIncomplete}
      />
      <AddTaskForm
        handleSubmit={handleSubmit}
        newTask={newTask}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default App;
