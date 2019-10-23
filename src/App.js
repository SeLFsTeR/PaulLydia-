import React from "react";
import "./App.css";
import Header from "./component/Header";
import Memes from "./component/Memes";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      memes: []
    };
  }

  componentWillMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => {
        return res.json();
      })
      .then(responsedata => {
        console.log("hello", responsedata.data.memes);
        this.setState({
          memes: responsedata.data.memes
        });
      });
  }

  render() {
    const memeList = this.state.memes.map(meme => {
      return <Memes id={meme.id} name={meme.name} url={meme.url} />;
    });
    // life cicle method this returns jsx
    return (
      <div className="App">
        <div>
          <Header className="Meme Generator" />
        </div>

        <div className="memeImg">{memeList}</div>
      </div>
    );
  }
}
