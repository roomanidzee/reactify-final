import React from "react";

import { Card } from 'antd';

import styles from '../../assets/css/sw/PersonCard.module.css';
import {Link} from "react-router-dom";
import {Person} from "../../store/persons/types";

export interface State{
    personForCard?: Person
}

type Props = {
    personForCard?: State["personForCard"]
}

export default class PersonCardComponent extends React.Component<Props, State>{

    shouldComponentUpdate(nextProps: Readonly<Props>): boolean {

        if(nextProps.personForCard && this.props.personForCard){
            return nextProps.personForCard.name !== this.props.personForCard.name;
        }

        return false;

    }

    render(): React.ReactNode{

        const {personForCard} = this.props;

        console.log("RESULT: " + personForCard);

        return(

            <Card

              title="Персонаж звёздных войн"
              extra={<Link to={{
                  pathname: "/person_info",
                  state: {
                      person: personForCard
                  }
              }}>Больше информации</Link>}
              className={styles.card}

            >

                {personForCard && <div>
                    <p>Имя: {personForCard.name}</p>
                    <p>Вес: {personForCard.mass} кг</p>
                    <p>Цвет волос: {personForCard.hair_color}</p>
                </div>}

            </Card>

        );

    }

}
