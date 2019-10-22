import React from "react";
import "./App.css";
import Title from "./component/title";
import footer from "./component/footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Title content="MEME title" />
      </div>
    );
  }
}
