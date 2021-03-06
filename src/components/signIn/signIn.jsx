import React, { useEffect, useState, useReducer } from 'react';
import './signIn.scss';
import FormInput from '../../components/formInput/formInput';
import CustomBtn from '../../components/customBtn/customBtn';
import { signInWithGoogle } from '../../firebase/firebase';
import ACTIONS from '../../constants/actions';
// //
// class SignIn extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//         }
//     }
//     handleChange = (event) =>{
//         event.preventDefault();
//         const {name, value} = event.target;
//         this.setState({[name]: value});
//     }
//     handleSubmit = (event) =>{
//         event.preventDefault();
//         this.setState({email: '', password: ''})
//     }
//     //
//     render(){
//         return (
//             <div className='sign-in'>
//                 <h2>I already have an account</h2>
//                 <span>{`Sign in with email & password`}</span>
//                 <form>
//                     <FormInput label='Email' name='email' type='email' value={this.state.email} handleChange={this.handleChange} />
//                     <FormInput label="Password" name='password' type='password' value={this.state.password} handleChange={this.handleChange} />
//                     <div className="buttons">
//                         <CustomBtn type='submit'>Sign In</CustomBtn>
//                         <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomBtn>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
//
const reducer = (state, action) => {
    console.log(`action: ${JSON.stringify(action)}`);
    switch (action.type){
        case ACTIONS.SET_USERNAME:
        case ACTIONS.SET_PASSWORD:
            return state = {...state, [action.type]: action.payload};
        default:
            break;
    }
}
const SignIn = props =>{
    const [state, dispatch] = useReducer(reducer, {});
    
    useEffect(()=>{
        console.log(`%cprops: ${JSON.stringify(props)}, state: ${JSON.stringify(state)}`, 'color:red;');
    }, [state]);
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>{`Sign in with email & password`}</span>
            <form>
                <FormInput label='Email' name={ACTIONS.SET_USERNAME} type='email' value={state.username} dispatch={dispatch} />
                <FormInput label="Password" name='password' type='password' value={state.password} dispatch={dispatch} />
                <div className="buttons">
                    <CustomBtn type='submit'>Sign In</CustomBtn>
                    <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomBtn>
                </div>
            </form>
        </div>
    )
}
//export
export default SignIn;