
import { useState } from "react";
import "../styles/TaskManager.css";

const TaskInput = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <div className="task-input">
      <div className="input-container">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter a new task..."
          className="task-text-input"
        />
        <button 
          onClick={handleSubmit} 
          className="add-button"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskInput;