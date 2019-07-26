import React, { Component } from 'react';
import Palette from "./components/Palette";
import seedColors from "./assets/seedColors";
//import './App.css';

class App extends Component {

  render() {
    return (
      <Palette palette={seedColors[0]} />
    );
  };

}

export default App;
