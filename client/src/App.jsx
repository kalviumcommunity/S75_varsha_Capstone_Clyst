// src/App.jsx
import React from 'react';
import CollegeList from './components/CollegeList';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-700 text-white p-4 text-center text-2xl font-bold shadow-md">
        CLYST: College Discovery Platform
      </header>
      <main className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Explore Top Colleges in Tamil Nadu</h2>
        <CollegeList />
      </main>
    </div>
  );
}

export default App;
