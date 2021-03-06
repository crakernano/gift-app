import React from 'react';
import { useState } from 'react/cjs/react.development';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategorias(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }


    return(
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value = {inputValue}
            onChange={handleInputChange}
        />
    </form>
    )
}

AddCategory.protoTypes = {
    setCategorias: PropTypes.func.isRequired
}