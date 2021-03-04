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
                    <CustomBtn type='submit'>Sign In</CustomBtn>
                    <CustomBtn onClick={signInWithGoogle}>Sign In With Google</CustomBtn>
                </form>
            </div>
        )
    }
}
//export
export default SignIn;