import React, { Component } from "react";

export class Memes extends Component {
  render() {
    return (
      <div class="memeImg">
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}

export default Memes;
