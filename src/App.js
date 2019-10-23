import React from "react";
import "./App.css";
import Title from "./component/Title";
import Footer from "./component/Footer";
import Likebutton from "./component/Likebutton";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Title content="MEME title" />
        <Likebutton id="example" />
        <div id="example"></div>
      </div>
    );
  }
}
