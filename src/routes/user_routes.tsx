import React from "react";
import {Route} from "react-router";

import MainPageComponent from "../components/layout/MainPage";
import LoginComponent from "../components/login/Login";

const UserRoutes: React.FunctionComponent = () => (
    <div>
        <Route exact path = "/" component = {MainPageComponent}/>
        <Route path = "/login" component = {LoginComponent}/>
    </div>
);

export default UserRoutes;
