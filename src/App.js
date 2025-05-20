// src/App.js
import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import "./styles/TaskManager.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (title) => {
    const newTask = {
      id: Date.now(), // Use timestamp as unique ID
      title,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  // Toggle task completion status
  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="app-container">
      <div className="task-manager">
        <h1 className="app-title">Task Manager</h1>
        <TaskInput addTask={addTask} />
        <TaskFilter filter={filter} setFilter={setFilter} />
        <TaskList 
          tasks={tasks} 
          toggleComplete={toggleComplete} 
          deleteTask={deleteTask} 
          filter={filter}
        />
      </div>
    </div>
  );
}

export default App;