import React from 'react';
import ConnectedAccounts from './components/ConnectedAccounts';
import ChatTerminal from './components/ChatTerminal';
import PlatformControls from './components/PlatformControls'; // 👈 Add this

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4">
      <h1 className="text-2xl font-bold text-center mb-4">🧠 EDITH Dashboard</h1>
      <ConnectedAccounts />
      <PlatformControls /> {/* 👈 Add this below connected accounts */}
      <ChatTerminal />
    </div>
  );
}

export default App;
