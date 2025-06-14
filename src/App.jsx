import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-400">🧠 EDITH Dashboard</h1>
        <p className="text-gray-400">Your personal AI ops and career assistant</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">📌 Today's Tasks</h2>
        <ul className="space-y-2">
          <li className="bg-gray-800 p-3 rounded-lg shadow-md">Push code to GitHub</li>
          <li className="bg-gray-800 p-3 rounded-lg shadow-md">Deploy EDITH to Vercel</li>
          <li className="bg-gray-800 p-3 rounded-lg shadow-md">Add resume PDF viewer</li>
        </ul>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">💸 Finance Tracker</h3>
        <ul className="space-y-3">
          <li className="bg-gray-800 p-3 rounded-xl shadow-md flex justify-between items-center">
            <span>Income Target (June)</span>
            <span className="text-green-300 font-bold">₹50,000</span>
          </li>
          <li className="bg-gray-800 p-3 rounded-xl shadow-md flex justify-between items-center">
            <span>Jobs Applied</span>
            <span className="text-yellow-300 font-bold">17</span>
          </li>
          <li className="bg-gray-800 p-3 rounded-xl shadow-md flex justify-between items-center">
            <span>Freelance Tasks Bidding</span>
            <span className="text-red-300 font-bold">3 Pending</span>
          </li>
        </ul>
      </section>

      <footer className="mt-10 text-center text-sm text-gray-600 border-t border-gray-700 pt-4">
        Powered by EDITH • Your AI Career & Ops Assistant 💡<br />
        <a href="https://www.linkedin.com/in/mrinal-rajput-38606a247" target="_blank" className="text-blue-400 underline">LinkedIn</a> | 
        <a href="https://github.com/mrinalrajpoot-dev" target="_blank" className="text-blue-400 underline ml-2">GitHub</a>
      </footer>
    </div>
  );
};

export default App;
