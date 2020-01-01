import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className='Person'>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Profession: {props.profession}</p>
            <button className='delete' onClick={props.delete}>Delete</button>
        </div>
    );
};

export default person;