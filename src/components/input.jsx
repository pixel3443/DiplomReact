import React from 'react';

const InputComponent = ({ id, title, coeff, value }) => {
    return (
        <div class='qw'>
            <input class='input_r' id={id} value={(coeff * value).toFixed(3)}></input>
            <label for={id} class='label_r'>{ title }</label>
            
        </div>
    )
};

export default InputComponent;