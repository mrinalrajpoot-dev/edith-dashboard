import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

export default function ChatTerminal() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetchMessages();

    const channel = supabase
      .channel('chat-updates')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'edith_chat' }, payload => {
        setMessages(prev => [...prev, payload.new]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('edith_chat')
      .select('*')
      .order('created_at', { ascending: true });

    if (!error) setMessages(data);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const { error } = await supabase.from('edith_chat').insert([
      { sender: 'user', text: input.trim() }
    ]);

    if (!error) setInput('');
  };

  return (
    <div className="terminal">
      <h2>EDITH Command Center</h2>
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i}><strong>{m.sender}:</strong> {m.text}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your command..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
