import React from "react";
import {Route} from "react-router";

import UserRoutes from "./user_routes";
import StarWarsRoutes from "./sw_routes";

const Routes: React.FunctionComponent = () => (

    <Route path = "/">
        <UserRoutes/>
        <StarWarsRoutes/>
    </Route>

);

export default Routes;
