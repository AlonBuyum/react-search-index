import React from 'react';
import './cards-holder.styles.css';
import { Card } from '../card/card.component'


export const CardsHolder = (props) => {
    console.log(props);
    return <div className='cards-holder'>
        <h2>A Child Of Cards Holder</h2>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
          
        ))}
    </div>;
};
