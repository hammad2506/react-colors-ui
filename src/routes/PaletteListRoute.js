import React from "react";
import { Route } from "react-router-dom";

const PaletteListRoute = ({ component: Component, seedData, ...rest }) => {
  return (
    <Route {...rest} render={() => <Component palettes={seedData} />} />
  );
};

export default PaletteListRoute;