<<<<<<< HEAD
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./component/title";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Title content="MEME title" />
      </div>
    );
  }
=======
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
>>>>>>> 18c4840a22dabde4fa10c9f245436a20e5e9230b
}
