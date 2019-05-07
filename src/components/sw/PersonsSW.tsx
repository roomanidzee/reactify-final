import React, {ReactNode} from "react";

import { Spin } from 'antd';
import {fetchRequest} from "../../store/persons/actions";
import {RouteComponentProps} from "react-router";
import {ApplicationState, ConnectedReduxProps} from "../../store";

import {connect} from "react-redux";
import {PropsFromState, PropsFromDispatch, RouteParams} from "./PropsAndValues";
import PersonCardComponent from "./PersonCard";

type Props = PropsFromState & PropsFromDispatch & RouteComponentProps<RouteParams> & ConnectedReduxProps

class PersonsSWComponent extends React.Component<Props, {}>{

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

        console.log("DATA: " + data);

        let newPersons = data.map(person => (
           <PersonCardComponent
               key={person.name}
               personForCard={person}
           />
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonsSWComponent);
