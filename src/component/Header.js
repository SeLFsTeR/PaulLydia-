import React, { Component } from "react";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <div>
          <h1 style={{ fontSize: 60, color: "white" }}>MEME GENERATOR</h1>
        </div>
      </div>
    );
  }
}

export default Header;
