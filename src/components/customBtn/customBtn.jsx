import React from 'react';
import './customBtn.scss';
//
const CustomBtn = ({children, isGoogleSignIn, inverted, ...otherBtnProps}) =>{
    return(
        <button className={inverted ? 'inverted custom-button' : isGoogleSignIn ? 'google-sign-in custom-button': 'custom-button'} {...otherBtnProps}>{children}</button>
    )
}
//export
export default CustomBtn;