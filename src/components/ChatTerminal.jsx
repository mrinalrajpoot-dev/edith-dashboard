import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { getOpenAIReply } from '../lib/openaiClient'

export default function ChatTerminal() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetchMessages()
  }, [])

  async function fetchMessages() {
    const { data, error } = await supabase
      .from('edith_chat')
      .select('*')
      .order('created_at', { ascending: true })

    if (data) setMessages(data)
  }

  async function handleSend() {
    if (!input.trim()) return

    const userMsg = { sender: 'user', text: input }
    setMessages([...messages, userMsg])
    setInput('')

    // Save user message
    await supabase.from('edith_chat').insert([userMsg])

    // Get EDITH's reply
    const edithReply = await getOpenAIReply(input)
    const edithMsg = { sender: 'edith', text: edithReply }

    // Save EDITH message
    await supabase.from('edith_chat').insert([edithMsg])

    setMessages(prev => [...prev, edithMsg])
  }

  return (
    <div className="chat-terminal">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`msg ${msg.sender}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          placeholder="Type your command..."
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}
