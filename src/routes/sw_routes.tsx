import React from "react";
import {Route} from "react-router";
import PersonsSW from "../components/sw/PersonsSW";
import PersonInfoComponent from "../components/sw/PersonInfo";

const StarWarsRoutes: React.FunctionComponent = () => (
    <div>
        <Route path = "/persons" component = {PersonsSW}/>
        <Route path = "/person_info" component = {PersonInfoComponent}/>
    </div>

);

export default StarWarsRoutes;
