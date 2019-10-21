import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './component/title';

export default class App extends React.Component{
  render(){
    return(
<div className="App">

<main>
      <Title content="MEME title" />
    </main>
     
    </div>


    )
  }
}
