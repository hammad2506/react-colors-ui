import React, { Component } from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css"

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", snackbarOpen: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
  }

  handleFormatChange(event) {
    const formatValue = event.target.value;
    this.setState({ format: formatValue, snackbarOpen: true });
    this.props.onFormatChange(formatValue);
  }

  handleSnackbarClose() {
    this.setState({ snackbarOpen: false });
  }

  render() {
    const { format, snackbarOpen } = this.state;
    const { level, changeLevel } = this.props;

    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#!">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="format-select">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value={"hex"}>HEX  #fff</MenuItem>
            <MenuItem value={"rgb"}>RGB  (230, 225, 205)</MenuItem>
            <MenuItem value={"rgba"}>RGBA  (230, 225, 205, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={this.handleSnackbarClose}
          ContentProps={{ 'aria-describedby': 'message-id' }}
          message={<span id="message-id">Format Changed to {format.toUpperCase()}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={this.handleSnackbarClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
};

export default Navbar;