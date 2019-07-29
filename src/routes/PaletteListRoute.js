import React from "react";
import { Route } from "react-router-dom";

const PaletteListRoute = ({ component: Component, seedData, ...rest }) => {
  return (
    <Route {...rest} render={(routeProps) => <Component palettes={seedData} {...routeProps} />} />
  );
};

export default PaletteListRoute;