
import "../styles/TaskManager.css";

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="task-checkbox"
        />
        <span className={task.completed ? 'completed-text' : ''}>
          {task.title}
        </span>
      </div>
      <button 
        onClick={() => deleteTask(task.id)}
        className="delete-button"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;