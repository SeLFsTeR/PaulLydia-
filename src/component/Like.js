import React, { Component } from "react";

export class Like extends Component {
  state = {
    counter: 0
  };

  clicks = () => {
    let newCount = this.state.counter + 1;
    this.setState({ counter: newCount });
    console.log(newCount);
  };

  render() {
    return (
      <div>
        <button onClick={this.clicks}>LIKE {this.state.counter}</button>
      </div>
    );
  }
}

export default Like;
