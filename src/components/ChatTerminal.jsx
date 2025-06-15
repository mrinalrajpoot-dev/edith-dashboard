import React, { useState } from 'react';
import ChatActionEngine from './ChatActionEngine';

function ChatTerminal() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [command, setCommand] = useState(""); // Tracks last command

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setCommand(input);                         // Update the command
    setMessages([...messages, input]);         // Add to messages
    setInput('');                              // Clear input field
  };

  return (
    <div className="bg-zinc-800 p-4 rounded-md mt-4">
      <h2 className="text-lg font-semibold mb-2">🖥️ EDITH Terminal</h2>

      <div className="bg-zinc-900 p-3 h-40 overflow-y-auto rounded text-sm mb-2">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-1">
            <span className="text-green-400">> </span>{msg}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          className="flex-grow p-2 bg-zinc-700 rounded text-white"
          placeholder="Type a command (e.g., update GitHub bio)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
          Run
        </button>
      </form>

      {/* EDITH Response Section */}
      {command && <ChatActionEngine command={command} />}
    </div>
  );
}

export default ChatTerminal;
