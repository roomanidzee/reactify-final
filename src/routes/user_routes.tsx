import React from "react";
import {Route} from "react-router";

import MainPageComponent from "../components/layout/MainPage";

const UserRoutes: React.FunctionComponent = () => (
  <Route exact path = "/" component = {MainPageComponent}/>
);

export default UserRoutes;
