
import TaskItem from "./TaskItem";
import "../styles/TaskManager.css";

const TaskList = ({ tasks, toggleComplete, deleteTask, filter }) => {
  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; 
  });

  return (
    <div className="task-list">
      {filteredTasks.length === 0 ? (
        <p className="no-tasks">No tasks to display</p>
      ) : (
        filteredTasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            toggleComplete={toggleComplete} 
            deleteTask={deleteTask} 
          />
        ))
      )}
    </div>
  );
};

export default TaskList;