import React from 'react';
import './loginPage.scss';
import SignIn from '../../components/signIn/signIn';
//
const LoginPage = () => {
    return(
        <div className="login-container">
            <SignIn />
        </div>
    )
}
//export
export default LoginPage;