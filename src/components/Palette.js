import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css"

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.formatChange = this.formatChange.bind(this);
  };

  changeLevel(level) {
    this.setState(() => ({ level }));
  }

  formatChange(value) {
    this.setState({ format: value });
  }

  render() {
    const { colors, paletteName, emoji } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => <ColorBox key={color.id} background={color[format]} name={color.name} />);

    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} onFormatChange={this.formatChange} />
        <div className="Palette-colors">
          {colorBoxes}
        </div>
        <footer className='Palette-footer'>
          {paletteName}
          <span className='emoji'>{emoji}</span>
        </footer>
      </div>
    );
  };
};

export default Palette;