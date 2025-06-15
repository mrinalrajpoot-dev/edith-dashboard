// src/components/ChatTerminal.jsx

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

const ChatTerminal = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("edith_chat")
      .select("*")
      .order("created_at", { ascending: true });

    if (!error) setMessages(data || []);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = {
      sender: "user",
      text: input,
    };

    const aiResponse = {
      sender: "edith",
      text: `Processing: "${input}" - EDITH is evolving!`,
    };

    setMessages((prev) => [...prev, newMessage, aiResponse]);

    // Save to Supabase
    await supabase.from("edith_chat").insert([
      { sender: "user", text: input },
      { sender: "edith", text: aiResponse.text },
    ]);

    setInput("");
  };

  return (
    <div className="w-full p-4 bg-black text-green-400 font-mono">
      <h2 className="text-xl mb-4">EDITH Command Center</h2>

      <div className="h-96 overflow-y-scroll mb-4 border border-green-600 p-2 rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.sender === "edith" ? "text-yellow-400" : ""}`}>
            <strong>{msg.sender.toUpperCase()}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-grow p-2 bg-gray-800 text-white border border-green-400 rounded"
          placeholder="Type your command..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-green-600 px-4 py-2 rounded text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatTerminal;
