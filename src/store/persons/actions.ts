import { action } from 'typesafe-actions';
import {Person, PersonsActionTypes} from "./types";

export const fetchRequest = () => action(PersonsActionTypes.FETCH_DATA);

export const allPersonsAction =
    (data: Person[]) => action(PersonsActionTypes.GET_ALL, data);
