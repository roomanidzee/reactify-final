export interface Person {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

export const enum PersonsActionTypes {
    FETCH_DATA = '@@persons/FETCH_DATA',
    GET_ALL = '@@persons/GET_ALL'
}

export interface PersonsState {
    readonly loading: boolean
    readonly data: Person[]
    readonly errors?: string
}
