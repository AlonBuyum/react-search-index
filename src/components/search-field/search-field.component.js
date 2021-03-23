import React from 'react';
import './search-field.styles.css';

export const SearchField = ({placeholder, onChangeHandler}) => (
    <input type='search' placeholder={placeholder} onChange={onChangeHandler} />
); /** this is an interesting way to write a destructure statement. first we take the properties named 'placeholder' & 'onChangeHandler' off the object that 
will be passed in the parameters of the function, second we create two new ⎵variables⎵ inside a new ⎵object⎵ with the names and values of the two properties
we stripped off the  object that was passed in the function's parameters   */

