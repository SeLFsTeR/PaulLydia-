import React from "react";
import logo from "./logo.svg";
import "./App.css";
<<<<<<< HEAD
import header from "./components/header.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Dus</code>
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
=======
import Title from "./component/title";
>>>>>>> c83a9c3b16b3b5c8db5b2beb6e48955b61bc39a9

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Title content="MEME title" />
      </div>
    );
  }
}
