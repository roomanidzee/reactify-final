import {ApplicationState, createRootReducer} from "./index";
import {History} from 'history';
import {createStore, Store} from "redux";

export default (history: History, initialState: ApplicationState): Store<ApplicationState> =>
    createStore(createRootReducer(history), initialState)
