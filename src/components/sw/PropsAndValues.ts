import {Person} from "../../store/persons/types";
import {fetchRequest} from "../../store/persons/actions";

export interface PropsFromState {
    loading: boolean;
    data: Person[];
    errors?: string
}

export interface PropsFromDispatch {
    fetchRequest: typeof fetchRequest
}

export interface RouteParams {
    name: string
}
