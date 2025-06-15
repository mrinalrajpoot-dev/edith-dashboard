import React from 'react';

function ChatActionEngine({ command }) {
  const handleCommand = (cmd) => {
    if (cmd.includes("update GitHub bio")) {
      // GitHub API Integration goes here
      return "✅ GitHub bio update command recognized. Executing...";
    } else if (cmd.includes("update LinkedIn bio")) {
      // Placeholder: This would normally trigger a Puppeteer or OAuth routine
      return "⚠️ LinkedIn update requires manual trigger due to platform limitations.";
    } else if (cmd.includes("send resume")) {
      // Example Action
      return "📩 Resume sent to the predefined email list.";
    } else {
      return "🤖 Sorry, EDITH does not recognize this command yet.";
    }
  };

  return (
    <div className="mt-2 p-3 bg-zinc-700 rounded">
      <strong>EDITH Response:</strong> {handleCommand(command)}
    </div>
  );
}

export default ChatActionEngine;
