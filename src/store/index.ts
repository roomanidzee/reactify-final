import {PersonsState} from "./persons/types";
import {Action, AnyAction, combineReducers, Dispatch} from "redux";
import { History } from 'history';
import personReducer from "./persons/reducers";
import { connectRouter, RouterState } from 'connected-react-router';

import { all, fork} from 'redux-saga/effects';
import personsSaga from "./persons/sagas";

export interface ApplicationState {
    persons: PersonsState,
    router: RouterState
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
}

export const createRootReducer =
    (history: History) => combineReducers({

       persons: personReducer,
       router: connectRouter(history)

    });

export function* createRootSaga() {
    yield all([fork(personsSaga)])
}
