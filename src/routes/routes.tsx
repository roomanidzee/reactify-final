import React from "react";
import {Route} from "react-router";

import UserRoutes from "./user_routes";

const Routes: React.FunctionComponent = () => (

    <Route path = "/">
        {UserRoutes}
    </Route>

);

export default Routes;
