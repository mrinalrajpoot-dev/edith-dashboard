import React from 'react';

function TaskCard({ task, index, completeTask }) {
  return (
    <div className="bg-gray-700 p-4 mb-2 rounded-lg flex justify-between items-center">
      <span className={task.done ? "line-through text-gray-400" : ""}>
        {index + 1}. {task.name}
      </span>
      {!task.done && (
        <button
          onClick={() => completeTask(index)}
          className="bg-green-600 px-2 py-1 text-sm rounded hover:bg-green-500"
        >
          Mark Done ✅
        </button>
      )}
    </div>
  );
}

export default TaskCard;
