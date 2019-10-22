import React from "react";
import "./App.css";
import Header from "./component/Header";
import Memes from "./component/Memes";

export default class App extends React.Component {
  state = {
    memes: [
      {
        id: 1,
        name: ""
      }
    ]
  }; //array of objects for multiple components
  // to acces state this.state.whatever
  // to add props whatever={this.state.whatever}
  // fetch('https://api.imgflip.com/get_memes').then((res)=>res.json()).then((res)=>res.data.meme)
  render() {
    // life cicle method this returns jsx
    return (
      <div className="App">
        <div>
          <Header name="Meme Generator" />
        </div>

        <div class="memeImg">
          <Memes src="https://i.imgflip.com/1ur9b0.jpg" alt="" />
        </div>
      </div>
    );
  }
}
