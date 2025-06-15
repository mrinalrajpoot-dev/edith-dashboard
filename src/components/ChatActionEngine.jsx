import React, { useEffect, useState } from 'react';
import { updateGithubBio } from '../api/updateGithubBio';

function ChatActionEngine({ command }) {
  const normalizedCommand = command.trim().toLowerCase();
  const [response, setResponse] = useState("🧠 Processing...");

  useEffect(() => {
    const runAction = async () => {
      if (normalizedCommand === "update github bio") {
        try {
          const updated = await updateGithubBio("🚀 Updated by EDITH — AI Powered Developer Dashboard");
          setResponse("✅ GitHub bio updated successfully!");
        } catch (err) {
          setResponse("❌ Error: " + err.message);
        }
      } else if (normalizedCommand === "help") {
        setResponse(
          <>
            🤖 <strong>Available commands:</strong><br />
            - <code>update github bio</code><br />
            - <code>generate resume</code><br />
            - <code>help</code>
          </>
        );
      } else {
        setResponse("🧠 Sorry, EDITH does not recognize this command yet.");
      }
    };

    runAction();
  }, [normalizedCommand]);

  return (
    <div className="bg-black mt-4 p-4 rounded-md text-white text-sm border border-gray-700">
      <strong>EDITH Response:</strong><br />
      {response}
    </div>
  );
}

export default ChatActionEngine;
