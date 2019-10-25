import React from "react";
import "./App.css";
import Header from "./component/Header";
import Memes from "./component/Memes";

import { Route } from "react-router-dom";
import SingleImage from "./SingleImage";

class MemeList extends React.Component {
  constructor() {
    super();
    this.state = {
      memes: []
    };
  }

  componentDidMount() {
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
    return (
      <div>
        {this.state.memes.map(meme => {
          return (
            <Memes key={meme.id} id={meme.id} name={meme.name} url={meme.url} />
          );
        })}
        ;
      </div>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <Route exact path="/memes/:memeId" component={SingleImage} />
          <Route exact path="/memes" component={MemeList} />
        </div>
      </div>
    );
  }
}
