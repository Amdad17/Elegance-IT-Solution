
import "../styles/TaskManager.css";

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className="filter-container">
      <button 
        onClick={() => setFilter('all')}
        className={`filter-button ${filter === 'all' ? 'active' : ''}`}
      >
        All
      </button>
      <button 
        onClick={() => setFilter('active')}
        className={`filter-button ${filter === 'active' ? 'active' : ''}`}
      >
        Active
      </button>
      <button 
        onClick={() => setFilter('completed')}
        className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
      >
        Completed
      </button>
    </div>
  );
};

export default TaskFilter;