import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PaletteListRoute from "./PaletteListRoute";
import PaletteRoute from "./PaletteRoute";
import PalleteList from "../components/PaletteList";
import Palette from "../components/Palette";
import seedColors from "../assets/seedColors";
import { generatePalette } from "../utils/color-helpers";

const findAndGeneratePalette = (id) => {
  const paletteId = seedColors.find(function (palette) {
    return palette.id === id;
  });

  return generatePalette(paletteId);
}


const RouterApp = () => (
  <BrowserRouter>
    <Switch>
      <PaletteListRoute path='/' exact={true} component={PalleteList} seedData={seedColors} />
      <PaletteRoute path='/palette/:id'
        generatePalette={(props) => findAndGeneratePalette(props.match.params.id)}
        component={Palette}
      />
    </Switch>
  </BrowserRouter>
);

export default RouterApp;