import React from 'react';

function ChatActionEngine({ command }) {
  const normalizedCommand = command.trim().toLowerCase();

  // Add more commands in this object as you grow
  const actions = {
    "update github bio": () => (
      <div>
        🛠️ EDITH is preparing to update your GitHub bio...<br />
        <span className="text-yellow-400">Feature coming soon!</span> We'll securely connect to your GitHub via API and update the bio with your latest info.
      </div>
    ),

    "help": () => (
      <div>
        🤖 <strong>Available commands:</strong><br />
        - <code>update github bio</code><br />
        - <code>update linkedin bio</code><br />
        - <code>show connected platforms</code><br />
        - <code>generate resume</code><br />
        - <code>help</code>
      </div>
    ),
  };

  return (
    <div className="bg-black mt-4 p-4 rounded-md text-white text-sm border border-gray-700">
      <strong>EDITH Response:</strong><br />
      {actions[normalizedCommand] ? (
        actions[normalizedCommand]()
      ) : (
        <span>🧠 Sorry, EDITH does not recognize this command yet.</span>
      )}
    </div>
  );
}

export default ChatActionEngine;
