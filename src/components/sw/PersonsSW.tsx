import React, {ReactNode} from "react";

import { Spin } from 'antd';
import {Person} from "../../store/persons/types";
import {fetchRequest} from "../../store/persons/actions";
import {RouteComponentProps} from "react-router";
import {ApplicationState, ConnectedReduxProps} from "../../store";

import {connect} from "react-redux";

interface PropsFromState {
    loading: boolean;
    data: Person[];
    errors?: string
}

interface PropsFromDispatch {
    fetchRequest: typeof fetchRequest
}

interface RouteParams {
    name: string
}

interface State {
    persons: Person[]
}

type Props = PropsFromState & PropsFromDispatch & RouteComponentProps<RouteParams> & ConnectedReduxProps

class PersonsSW extends React.Component<Props, State>{

    constructor(props: Props){
        super(props);

        this.state = {
            persons: []
        }

    }

    componentDidMount(): void {

        const {data} = this.props;

        if(!data || data.length === 0){
            this.props.fetchRequest();
        }

    }

    render(): ReactNode {

        const {data, loading} = this.props;

        //костыль, переделать
        let newPersons = data.map(person => (
           <div key = {person.name}>
               <p>{person.name}</p>
               <br/>
               <p>{person.mass}</p>
               <br/>
           </div>
        ));

        return (

            <div>

            {loading &&
              (<Spin size="large" />)}

            {!loading && (newPersons)}

            </div>

        );
    }

}

const mapStateToProps = ({persons} : ApplicationState) => ({
    loading: persons.loading,
    data: persons.data,
    errors: persons.errors
});

const mapDispatchToProps = {
    fetchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonsSW);
