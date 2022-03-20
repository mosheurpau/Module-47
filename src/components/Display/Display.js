import React from 'react';

const Display = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>So far steps today: {props.steps}</p>
        </div>
    );
};

export default Display;