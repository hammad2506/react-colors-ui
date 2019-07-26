import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css"

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500 };
    };

    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const colorBoxes = colors[level].map(color => <ColorBox key={color.id} background={color.hex} name={color.name} />);

        return (
            <div className="Palette">
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        );
    };
};

export default Palette;