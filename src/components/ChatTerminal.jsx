// src/components/ChatTerminal.jsx
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const ChatTerminal = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('edith_chat_history')
      .select('*')
      .order('created_at', { ascending: true });
    if (!error) setMessages(data);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    setLoading(true);

    const userMessage = {
      role: 'user',
      content: input,
    };

    await supabase.from('edith_chat_history').insert([userMessage]);

    // Simulate EDITH's AI response
    const botMessage = {
      role: 'edith',
      content: `You said: "${input}" — this message is stored.`,
    };

    await supabase.from('edith_chat_history').insert([botMessage]);

    setInput('');
    setLoading(false);
    fetchMessages();
  };

  return (
    <div className="p-4 h-full overflow-y-auto flex flex-col bg-black text-green-400 font-mono">
      <h1 className="text-xl mb-4">🧠 EDITH Chat Terminal</h1>

      <div className="flex-1 overflow-y-auto border border-green-500 rounded-md p-2 mb-4 bg-gray-900">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-2">
            <span className="font-bold">{msg.role === 'user' ? 'You' : 'EDITH'}:</span> {msg.content}
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here..."
          className="flex-1 p-2 rounded-md border border-green-500 bg-gray-800 text-white"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="px-4 py-2 bg-green-600 rounded-md text-white hover:bg-green-700"
        >
          {loading ? 'Thinking...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default ChatTerminal;
