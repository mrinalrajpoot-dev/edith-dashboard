import React, { useState } from 'react';
import ChatActionEngine from './ChatActionEngine';

function ChatTerminal() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [command, setCommand] = useState(""); // 👈 New state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setCommand(input); // 👈 Capture command
    setMessages([...messages, input]);
    setInput('');
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
          className="flex-grow p-2 bg-zinc-700 rounded text-white"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a command (e.g., update GitHub bio)"
        />
        <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700" type="submit">
          Run
        </button>
      </form>

      {/* 💡 EDITH responds here */}
      {command && <ChatActionEngine command={command} />}
    </div>
  );
}

export default ChatTerminal;
