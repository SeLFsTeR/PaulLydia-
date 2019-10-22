import React, { Component } from "react";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Header;
