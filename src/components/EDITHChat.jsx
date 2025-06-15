import React, { useState } from 'react';

const EDITHChat = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello, I’m EDITH. How may I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];

    // Optional: Replace with real OpenAI API call here
    const response = `Processing: "${input}" - EDITH is evolving!`;

    setMessages([...newMessages, { role: 'assistant', content: response }]);
    setInput('');
  };

  return (
    <div className="w-full h-[80vh] bg-zinc-900 text-white p-4 rounded-md overflow-hidden flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-2 pr-2">
        {messages.map((msg, i) => (
          <div key={i} className={`p-2 rounded ${msg.role === 'user' ? 'bg-zinc-700 self-end' : 'bg-zinc-800 self-start'}`}>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          className="flex-1 px-4 py-2 rounded-l bg-zinc-800 outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your command..."
        />
        <button onClick={sendMessage} className="bg-blue-600 px-4 rounded-r">Send</button>
      </div>
    </div>
  );
};

export default EDITHChat;
