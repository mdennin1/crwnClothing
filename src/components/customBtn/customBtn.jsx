import React from 'react';
import './customBtn.scss';
//
const CustomBtn = ({children, isGoogleSignIn, ...otherBtnProps}) =>{
    return(
        <button className={`${isGoogleSignIn ? 'google-sign-in custom-button': 'custom-button'}`} {...otherBtnProps}>{children}</button>
    )
}
//export
export default CustomBtn;