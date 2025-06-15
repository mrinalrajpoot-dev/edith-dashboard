import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

const ChatTerminal = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Fetch old messages
  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase
        .from('edith_chat')
        .select('*')
        .order('created_at', { ascending: true });
      setMessages(data);
    };

    fetchMessages();

    // Real-time updates
    const subscription = supabase
      .from('edith_chat')
      .on('INSERT', payload => {
        setMessages(prev => [...prev, payload.new]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    await supabase.from('edith_chat').insert([
      {
        sender: 'user',
        text: input.trim()
      }
    ]);

    setInput('');
  };

  return (
    <div className="chat-container">
      <h2>EDITH Command Center</h2>
      <div className="messages">
        {messages.map(msg => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            <strong>{msg.sender.toUpperCase()}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your command..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatTerminal;
