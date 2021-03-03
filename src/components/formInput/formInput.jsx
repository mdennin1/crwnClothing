import React from 'react';
import './formInput.scss';
//
const FormInput = ({handleChange, label, value, ...otherProps}) =>{
    return(
        <div className="group">
            <input className="form-input" {...otherProps} onChange={handleChange} />
            {
                label ? 
                (<label className={`${value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>)
                : null
            }
        </div>
    )
}
//
export default FormInput;