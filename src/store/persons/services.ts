import React from 'react';

import axios from 'axios';

const initialState = {
    apiURL: "https://swapi.co/api/people/"
};

type State = Readonly<typeof initialState>;

type Props = {
    apiURL: State["apiURL"]
}

export default class PersonService extends React.Component<Props, State>{

    readonly state: State = initialState;

    constructor(props: Props){
        super(props);

        this.handleAllPersons = this.handleAllPersons.bind(this);

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

}
