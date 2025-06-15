import React, { useState } from 'react';
import TaskCard from './components/TaskCard';
import defaultTasks from './data/tasks';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(defaultTasks);
  const [newTask, setNewTask] = useState('');

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = true;
    setTasks(updatedTasks);
  };

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { name: newTask, done: false }]);
    setNewTask('');
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-500">🧠 EDITH Dashboard</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📌 Task Tracker</h2>
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder="Add a new task..."
            className="p-2 text-black rounded-l w-full"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-500"
          >
            Add
          </button>
        </div>
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} index={index} completeTask={completeTask} />
        ))}
      </div>

      <footer className="text-gray-500 mt-10 text-sm">
        EDITH v1.0 — Your Personal AI Assistant Dashboard
      </footer>
    </div>
  );
}

export default App;
