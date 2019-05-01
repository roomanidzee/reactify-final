import { Reducer } from 'redux';
import {PersonsActionTypes, PersonsState} from "./types";

export const initialState: PersonsState = {

    data: [],
    loading: false,
    errors: undefined

};

const personReducer: Reducer<PersonsState> = (state = initialState, action) => {

    switch(action.type){

        case PersonsActionTypes.FETCH_DATA: {
            return {
                ...state,
                loading: true
            }
        }

        case PersonsActionTypes.GET_ALL: {
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        }

        default: {
            return state
        }

    }

};

export default personReducer;
