import React, { Component } from "react";

export class SingleImage extends Component {
  state = {
    image: null
  };

  componentDidMount() {
    fetch("http://localhost:3000/memes/112126428");
  }

  render() {
    return (
      <div>
        <h1>bla dibla</h1>
        {this.props.match.params.memeId}
      </div>
    );
  }
}

export default SingleImage;
