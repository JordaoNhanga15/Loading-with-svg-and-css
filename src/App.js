import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <svg viewBox="0 0 40 60">
          <polygon className="polygon" fill="none" stroke="#fff" strokeWidth="1" points="16,1 32,32 1,32"/>
          <text className="load-text" x="0" y="45" fill="#fff">Loading...</text>
        </svg>
      </header>
    </div>
  );
}

export default App;
