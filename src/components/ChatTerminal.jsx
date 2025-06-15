// src/components/ChatTerminal.jsx
import React, { useState } from 'react';
import { updateGithubBio } from '../api/updateGithubBio';

const ChatTerminal = () => {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('');

  const handleCommand = async (e) => {
    e.preventDefault();

    const trimmed = command.trim().toLowerCase();

    if (trimmed.startsWith('update github bio')) {
      const newBio = command.slice('update github bio'.length).trim();
      if (!newBio) {
        setResponse('⚠️ Please enter a valid bio.');
        return;
      }

      try {
        await updateGithubBio(newBio);
        setResponse('✅ GitHub bio updated successfully.');
      } catch (error) {
        setResponse(`❌ Failed to update bio: ${error.message}`);
      }

    } else {
      setResponse('❌ Sorry, EDITH does not recognize this command yet.');
    }

    setCommand('');
  };

  return (
    <div className="bg-black text-white p-4 rounded mt-6">
      <form onSubmit={handleCommand} className="flex items-center space-x-2">
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Type a command (e.g., update github bio...)"
          className="flex-1 bg-gray-800 text-white px-3 py-2 rounded"
        />
        <button type="submit" className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
          Run
        </button>
      </form>
      {response && (
        <div className="mt-4 bg-gray-900 p-3 rounded text-sm">
          <strong>EDITH Response:</strong><br />{response}
        </div>
      )}
    </div>
  );
};

export default ChatTerminal;
