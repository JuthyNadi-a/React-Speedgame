import React from 'react';
import './circle.css';

const Circle = (props) => {
    return (
        <div className='circle' onClick={props.click}>
            <h3>
                {props.content}
            </h3>
        </div>
    );
};

export default Circle;