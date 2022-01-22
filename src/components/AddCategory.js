
import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inpuntValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inpuntValue.trim().length>2) {
            setCategories(cats => [inpuntValue, ...cats]); //cats tiene el estado anerior
            setInputValue('');
        }
       
    }

    return (
           <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inpuntValue}
                    onChange={handleInputChange}
                />
           </form>
    )
}

//Configurarion Prototypes
AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

};
