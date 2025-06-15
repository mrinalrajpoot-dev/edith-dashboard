// src/components/ConnectedAccounts.jsx
import React from 'react';

const platforms = [
  {
    name: "GitHub",
    status: "Connected",
    link: "https://github.com/mrinalrajpoot-dev"
  },
  {
    name: "LinkedIn",
    status: "Connected",
    link: "https://www.linkedin.com/in/mrinal-rajput-38606a247"
  },
  {
    name: "Vercel",
    status: "Connected",
    link: "https://vercel.com/mrinal-rajpoots-projects"
  }
];

const ConnectedAccounts = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 shadow p-6 rounded-lg mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">🔗 Connected Accounts</h2>
      <ul className="space-y-3">
        {platforms.map((platform, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <div>
              <p className="text-lg font-medium text-gray-700 dark:text-white">{platform.name}</p>
              <p className="text-sm text-green-600">{platform.status}</p>
            </div>
            <a
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              View
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConnectedAccounts;
