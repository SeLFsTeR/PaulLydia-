import React from "react";
import "./App.css";
import Title from "./component/Title";
import Footer from "./component/Footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Title content="MEME title" />
        <Footer />
      </div>
    );
  }
}
