import React from 'react';
import './customBtn.scss';
//
const CustomBtn = ({children, ...otherBtnProps}) =>{
    return(
        <button className='custom-button' {...otherBtnProps}>{children}</button>
    )
}
//export
export default CustomBtn;