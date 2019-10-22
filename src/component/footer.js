import React from "react";

const Footer = ({ title }) => <footer>{title}</footer>;

class App extends React.Component {
  render() {
    const {footer} = this.props;
    return (
      
        <Footer title={footer}/>
      </div>
    );
  }
};