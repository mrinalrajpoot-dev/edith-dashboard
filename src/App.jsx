import React from 'react';
import ConnectedAccounts from './components/ConnectedAccounts';
import ChatTerminal from './components/ChatTerminal';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-950 text-gray-900 dark:text-white p-6">
      <h1 className="text-3xl font-bold mb-4">🧠 EDITH Dashboard</h1>
      <ConnectedAccounts />
      <ChatTerminal />
    </div>
  );
}

export default App;
