import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Picture from "./Picture";

export class Memes extends Component {
  state = {
    bottomText: "",
    topText: ""
  };

  handleChange = event => {
    console.log("waaaaa", event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("hello");
    event.preventDefault();
    console.log("WAAAA", this.state);
    const data = {
      text0: this.state.topText,
      text1: this.state.bottomText,
      template_id: this.props.id,
      username: "lydia-coder",
      password: "Erdfcv00#"
    };
    const url = `https://api.imgflip.com/caption_image?text0=${data.text0}&text1=${data.text1}&template_id=${data.template_id}&username=${data.username}&password=${data.password}`;

    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors" // no-cors, *cors, same-origin
    }).then(response => {
      console.log(response);
    });
    this.setState({ bottomText: "", topText: "" });
  };

  // handleClick = () => {
  //   console.log("hello??");
  //   this.props.clickImage(this.props.url);
  // };
  render() {
    return (
      <div className="memeImg">
        <img
          // onClick={this.handleClick}
          style={{
            width: 800,
            borderRadius: 2,
            borderColor: "white",
            borderStyle: "solid",
            borderWidth: 6
          }}
          src={this.props.url}
          alt={""}
        />
        <p>{this.props.name}</p>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Top Text:</label>
            <input
              name="topText"
              value={this.state.topText}
              onChange={this.handleChange}
            />
            <label>Bottom Text:</label>
            <input
              name="bottomText"
              value={this.state.bottomText}
              onChange={this.handleChange}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Memes;
{
  /* <Route path="/Picture" component={Picture} /> */
}
