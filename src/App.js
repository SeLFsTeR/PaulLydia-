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

  // clickImage = selectMeme => {
  //   console.log("does it click?");
  //   const selectedMeme= this.state.meme.map(meme=>{
  //     if(meme === null){

  //     }
  //   })
  // };

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
    const memeList = this.state.memes.map(meme => {
      return (
        <Memes id={meme.id} name={meme.name} url={meme.url} />
        // clickImage={this.clickImage}
      );
    });
    // life cicle method this returns jsx
    return (
      <div className="App">
        <div>
          <Header className="MemeGenerator" />
        </div>

        <div className="memeImg">{memeList}</div>
      </div>
    );
  }
}
