import React from 'react';
import {AiOutlineStar} from 'react-icons/ai';

function Stars({value}) {
    let output = '';
    if(value === 1) {
        output = <div>
            <AiOutlineStar color='orange' />
        </div>
    } else if (value === 2) {
        output = <div><AiOutlineStar color='orange' /><AiOutlineStar color='orange' /></div>
    } else if (value === 3) {
        output = <div><AiOutlineStar color='orange' /><AiOutlineStar color='orange' />
        <AiOutlineStar color='orange' /></div>
    } else if (value === 4) {
        output = <div><AiOutlineStar color='orange' /><AiOutlineStar color='orange' /><AiOutlineStar color='orange' /><AiOutlineStar color='orange' /></div>
    } else {
        output = <div><AiOutlineStar color='orange' /><AiOutlineStar color='orange' /><AiOutlineStar color='orange' /><AiOutlineStar color='orange' /><AiOutlineStar color='orange' /></div>
    }

    return output;
}

export default Stars;