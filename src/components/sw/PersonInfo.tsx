import React from "react";

export default class PersonInfoComponent extends React.Component<any, any> {

    render(): React.ReactNode {

        const {person} = this.props.location.person;

        return (

            <div>
                {person.name}
                <br/>
                {person.height}
                <br/>
                {person.mass}
                <br/>
                {person.hair_color}
                <br/>
                {person.skin_color}
                <br/>
                {person.eye_color}
                <br/>
                {person.birth_year}
                <br/>
                {person.gender}
                <br/>
                {person.homeworld}
                <br/>
                {person.films}
                <br/>
                {person.species}
                <br/>
                {person.vehicles}
                <br/>
                {person.starships}
                <br/>
                {person.created}
                <br/>
                {person.edited}
                <br/>
                {person.url}
            </div>

        );
    }

}
