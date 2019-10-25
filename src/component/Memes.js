import React, { Component } from "react";
import Like from "./Like";
import { Link } from "react-router-dom";

export class Memes extends Component {
  state = {
    bottomText: "",
    topText: "",
    src: null
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
      username: "SeLFsTeR",
      password: "lunchbox"
    };
    const url = `https://api.imgflip.com/caption_image?text0=${data.text0}&text1=${data.text1}&template_id=${data.template_id}&username=${data.username}&password=${data.password}`;
    console.log(url);
    fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors" // no-cors, *cors, same-origin
    })
      .then(response => {
        return response.text();
      })
      .then(json => {
        console.log(JSON.parse(json).data.url);
        this.setState({ src: JSON.parse(json).data.url });
      });
    this.setState({ bottomText: "", topText: "" });
  };

  render() {
    // const { params } = this.props.match;
    return (
      <div className="memeImg">
        <Link to={`/memes/${this.props.id}`}>
          <img
            // onClick={this.handleClick}
            style={{
              width: 800,
              borderRadius: 2,
              borderColor: "white",
              borderStyle: "solid",
              borderWidth: 6
            }}
            src={this.state.src === null ? this.props.url : this.state.src}
            alt={""}
          />
        </Link>
        <p>{this.props.name}</p>
        <Like />
        <div>
          <form onSubmit={this.handleSubmit}>
            <label style={{ color: "white" }}>Top Text:</label>
            <input
              name="topText"
              value={this.state.topText}
              onChange={this.handleChange}
            />
            <label style={{ color: "white" }}>Bottom Text:</label>
            <input
              name="bottomText"
              value={this.state.bottomText}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              style={{
                borderRadius: 2,
                color: "black",
                padding: 10,
                borderRadius: 20
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Memes;
