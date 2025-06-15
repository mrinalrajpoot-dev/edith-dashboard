// src/components/ChatTerminal.jsx
import React, { useState } from 'react';

const ChatTerminal = () => {
  const [messages, setMessages] = useState([
    { from: 'edith', text: 'Hi Mrinal! EDITH online 💡. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);

    // Simulate EDITH's reply
    setTimeout(() => {
      const edithResponse = {
        from: 'edith',
        text: `🔍 Processing: "${input}"... (Functionality coming soon)`
      };
      setMessages([...newMessages, edithResponse]);
    }, 800);

    setInput('');
  };

  return (
    <div className="bg-black text-green-400 p-4 rounded-md mt-6 font-mono">
      <h2 className="text-lg mb-2 text-white">🧠 EDITH Command Center</h2>
      <div className="h-64 overflow-y-auto bg-zinc-800 p-2 rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.from === 'user' ? 'text-blue-400' : 'text-green-400'}`}>
            <strong>{msg.from === 'user' ? 'You' : 'EDITH'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <input
          className="flex-1 p-2 bg-zinc-700 text-white rounded"
          type="text"
          placeholder="Type a command..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatTerminal;
