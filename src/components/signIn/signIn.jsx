import React from 'react';
import './signIn.scss';
import FormInput from '../../components/formInput/formInput';
import CustomBtn from '../../components/customBtn/customBtn';
import { signInWithGoogle } from '../../firebase/firebase';
//
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    handleChange = (event) =>{
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({email: '', password: ''})
    }
    //
    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>{`Sign in with email & password`}</span>
                <form>
                    <FormInput label='Email' name='email' type='email' value={this.state.email} handleChange={this.handleChange} />
                    <FormInput label="Password" name='password' type='password' value={this.state.password} handleChange={this.handleChange} />
                    <div className="buttons">
                        <CustomBtn type='submit'>Sign In</CustomBtn>
                        <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomBtn>
                    </div>
                </form>
            </div>
        )
    }
}
//export
export default SignIn;