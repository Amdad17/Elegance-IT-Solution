
import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import "./styles/TaskManager.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

 
  const addTask = (title) => {
    const newTask = {
      id: Date.now(), 
      title,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  
  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  
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