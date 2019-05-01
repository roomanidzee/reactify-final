import React from "react";
import {Route} from "react-router";
import PersonsSW from "../components/sw/PersonsSW";

const StarWarsRoutes: React.FunctionComponent = () => (
    <Route exact path = "/persons" component = {PersonsSW}/>
);

export default StarWarsRoutes;
