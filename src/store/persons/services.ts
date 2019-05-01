import React from 'react';

import axios from 'axios';
import {Person} from "./types";

const initialState = {
    apiURL: "https://swapi.co/api/people/",
    persons: [
        {
            name: "Test",
            height: "Test",
            mass: "Test",
            hair_color: "Test",
            skin_color: "Test",
            eye_color: "Test",
            birth_year: "Test",
            gender: "Test",
            homeworld: "Test",
            films: ["test", "test"],
            species: ["test", "test"],
            vehicles: ["test", "test"],
            starships: ["test", "test"],
            created: "Test",
            edited: "Test",
            url: "Test"
        }
    ]
};

type State = Readonly<typeof initialState>;

type Props = {
    apiURL: State["apiURL"],
    persons: State["persons"]
}

export default class PersonService extends React.Component<Props, State>{

    readonly state: State = initialState;

    constructor(props: Props){
        super(props);

        this.handleAllPersons = this.handleAllPersons.bind(this);
        this.handleAddPerson = this.handleAddPerson.bind(this);

    }

    handleAllPersons = () => {

        return async () => {

            try{

                const response = await axios.get(this.state.apiURL);

                return response.data.results;

            }catch (err) {
                console.error(err);
            }

        }

    };

    handleAddPerson = (item: Person) => {

        this.setState((previousState: State, props: Props) => {

            let {persons} = previousState;

            persons.push(item);

            return {
                persons: persons
            }

        });

    };

}
