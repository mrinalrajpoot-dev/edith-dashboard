// src/lib/openaiClient.js
export async function getOpenAIReply(message) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are EDITH, a helpful assistant created for Mrinal Rajput.' },
        { role: 'user', content: message },
      ],
    }),
  })
  const data = await response.json()
  return data.choices[0].message.content
}
