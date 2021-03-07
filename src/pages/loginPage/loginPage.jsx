import React from 'react';
import './loginPage.scss';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signUp/signUp';
//
const LoginPage = () => {
    return(
        <div className="login-container">
            <SignIn />
            <SignUp />
        </div>
    )
}
//export
export default LoginPage;