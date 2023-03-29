import React from "react";
import TaskItems from "../TaskItems";

function TaskList({
  chosenTasks,
  showIncomplete,
  setTaskStatus,
  removeTask,
  setShowIncomplete,
}) {
  return (
    <>
      <ul className="task-list">
        {chosenTasks.map((task) => (
          <TaskItems
            key={task.id}
            task={task}
            setTaskStatus={setTaskStatus}
            removeTask={removeTask}
          />
        ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted tasks only
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={showIncomplete}
          onChange={(e) => setShowIncomplete(e.target.checked)}
        />
      </div>
    </>
  );
}

export default TaskList;
