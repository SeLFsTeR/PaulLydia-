import React, { Component } from "react";

export class Memes extends Component {
  //array of objects for multiple components
  // to acces state this.state.whatever
  // to add props whatever={this.state.whatever}
  // fetch('https://api.imgflip.com/get_memes').then((res)=>res.json()).then((res)=>res.data.meme)
  render() {
    return (
      <div class="memeImg">
        <img src={this.props.url} />
        <p>{this.props.name}</p>
        <p>{this.props.id}</p>
      </div>
    );
  }
}

export default Memes;
