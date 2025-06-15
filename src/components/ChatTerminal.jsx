// src/components/ChatTerminal.jsx
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

const ChatTerminal = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  // Fetch chat history
  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase.from("edith_chat").select("*").order("id", { ascending: true });
      if (data) setMessages(data);
    };
    fetchMessages();
  }, []);

  // Add new message and fetch OpenAI reply
  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user's message to Supabase
    const { data: userMsg } = await supabase.from("edith_chat").insert([{ sender: "user", content: input }]);

    // Call OpenAI for response
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      }),
    });

    const result = await res.json();
    const reply = result.choices?.[0]?.message?.content || "EDITH encountered an error.";

    // Save reply to Supabase
    await supabase.from("edith_chat").insert([{ sender: "edith", content: reply }]);

    // Refresh chat
    const { data: updated } = await supabase.from("edith_chat").select("*").order("id", { ascending: true });
    setMessages(updated);
    setInput("");
  };

  return (
    <div className="terminal">
      <h1>🧠 EDITH Command Center</h1>
      <div className="chat-box">
        {messages.map((msg) => (
          <div key={msg.id} className={msg.sender === "user" ? "user" : "edith"}>
            <strong>{msg.sender === "user" ? "You" : "EDITH"}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="input-bar">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your command..." />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatTerminal;
