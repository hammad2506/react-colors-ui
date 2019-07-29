import React from "react";
import { Route } from "react-router-dom";

const PaletteRoute = ({ component: Component, generatePalette, ...rest }) => {
  return (
    <Route {...rest} render={(routeProps) => <Component palette={generatePalette(routeProps)} />} />
  );
};

export default PaletteRoute;