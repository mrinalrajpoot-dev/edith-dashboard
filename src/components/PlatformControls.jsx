import React from 'react';

function PlatformControls() {
  return (
    <div className="bg-zinc-800 text-white p-4 rounded-md mt-4">
      <h2 className="text-lg mb-2 font-bold">🔗 Connected Platforms</h2>
      <ul className="space-y-2">
        <li>
          <a href="https://github.com/mrinalrajpoot-dev" target="_blank" className="text-blue-400 hover:underline">
            🐙 GitHub: mrinalrajpoot-dev
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/mrinal-rajput-38606a247" target="_blank" className="text-blue-400 hover:underline">
            💼 LinkedIn: Mrinal Rajput
          </a>
        </li>
        <li>
          <a href="/resume.pdf" target="_blank" className="text-blue-400 hover:underline">
            📄 Resume: View PDF
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PlatformControls;
