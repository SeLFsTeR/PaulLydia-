import React from 'react';
import logo from './logo.svg';
import './App.css';
import header from './components/header'
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          LOL
        </a>
      </header>
    </div>
  );
}

export default App;
