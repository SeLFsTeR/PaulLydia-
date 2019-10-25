import React, { Component } from "react";

export default class SingleImage extends Component {
  state = {
    memes: null
  };

  componentDidMount() {
    const memeId = this.props.match.params.memeId;
    fetch("https://api.imgflip.com/get_memes")
      .then(res => {
        return res.json();
      })
      .then(responsedata => {
        const meme = responsedata.data.memes.find(meme => {
          return memeId === meme && meme;
        });
        this.setState({ meme: memeId });
        console.log("Sayy WAAT", memeId);
      });
  }

  // todo:
  // fetch from api using the memeId
  //   const memeId = this.props.match.params.memeId
  // then turn response into json
  // find the meme using array.find
  // then setState in this component with the meme
  // render the meme

  render() {
    return <div>{/* <SingleImage memes={this.state.memeId} /> */}</div>;
  }
}
