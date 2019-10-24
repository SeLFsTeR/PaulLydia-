import React from "react";
import "./App.css";
import Header from "./component/Header";
import Memes from "./component/Memes";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      memes: [],
      bottomText: "",
      topText: ""
    };
  }

  // this.Handlechange=this.HandleChange.bind(this)??

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
      return <Memes name={meme.name} url={meme.url} />;
    });
    // life cicle method this returns jsx
    return (
      <div className="App">
        <div>
          <Header className="Meme Generator" name="MEME GENERATOR" />
        </div>
        <div></div>

        <div className="memeImg">{memeList}</div>
      </div>
    );
  }
}

// <img onClick={FUNCTION showimage}
// Create a Meme Component that styles the look of 1 meme.
// When you click on an image, hide all the memes.
// if(clickedMeme = null, once you click a meme setState clickedMeme = meme.url
// if clickedMeme !== null, then show component
// hide other memes

//<img onClick={() => {
//   this.setState({!memes  && this.state.memes.map(meme => {
// return <Memes id={meme.id} name={meme.name} url={meme.url} />;})
//{memes}

// api has capotion for memes
