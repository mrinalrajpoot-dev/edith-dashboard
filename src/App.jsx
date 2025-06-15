import React from 'react';
import EDITHChat from './components/EDITHChat';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-start p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">EDITH Command Center</h1>
      <p className="mb-4 text-zinc-300">Live Chat with EDITH — AI Assistant for Mrinal Rajput</p>
      <div className="w-full max-w-4xl">
        <EDITHChat />
      </div>
    </div>
  );
}

export default App;
