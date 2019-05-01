import {ApplicationState, createRootReducer, createRootSaga} from "./index";

import {History} from 'history';

import {applyMiddleware, createStore, Store} from "redux";
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

export default (history: History, initialState: ApplicationState): Store<ApplicationState> => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
      createRootReducer(history),
      initialState,
      applyMiddleware(routerMiddleware(history), sagaMiddleware)
    );

    sagaMiddleware.run(createRootSaga);
    return store;

}

