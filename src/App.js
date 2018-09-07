import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

import img from './img/color-pattern.jpeg'

// const mainBg = 'url("./img/color-pattern.jpeg")';

class App extends Component {
  // componentDidMount(){
  //   document.body.style= {mainBg};
  // }
  render() {
    return (
      <div className="App" id="circular">
       <Todos />
      </div>
    );
  }
}

export default App;
