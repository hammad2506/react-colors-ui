import React, { Component } from 'react';
import Palette from "./components/Palette";
import seedColors from "./assets/seedColors";
import { generatePalette } from "./utils/color-helpers";

class App extends Component {

  render() {
    console.log(generatePalette(seedColors[0]));
    return (
      <Palette palette={generatePalette(seedColors[0])} />
    );
  };

}

export default App;
