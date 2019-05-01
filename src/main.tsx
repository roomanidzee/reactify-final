import React from "react";
import { ConnectedRouter } from 'connected-react-router';

import {ApplicationState} from "./store";
import {Store} from "redux";
import { History } from 'history';
import {Provider} from "react-redux";
import App from "./components/App";


interface MainProps {
    store: Store<ApplicationState>
    history: History
}

const Main: React.FC<MainProps> = ({ store, history }) => {

    return (
        <Provider store={store}>

            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>

        </Provider>
    );

};

export default Main;
