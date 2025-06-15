// src/components/VoiceInput.jsx
import React, { useState, useEffect } from 'react';

const VoiceInput = ({ onCommand }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  let recognition;

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition not supported on this browser.');
      return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      onCommand(result); // Send voice command to parent (ChatTerminal)
    };

    recognition.start();
  };

  return (
    <div className="mt-4">
      <button
        onClick={startListening}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        🎙️ Speak to EDITH
      </button>
      {transcript && <p className="mt-2 text-sm text-green-400">🗣️ You said: "{transcript}"</p>}
    </div>
  );
};

export default VoiceInput;
