import React from 'react';
import  './card.styles.css'

export const Card = (props) => {
    console.log('inside Card.component',props);
   return <div className='single-card'>
       <img alt='temp avatar' 
       src={`https://robohash.org/${props.monster.id}?set=set${(Math.round(Math.random()*3))+1}&size=180x180`}
       />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>;
}