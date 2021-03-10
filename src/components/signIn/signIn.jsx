import React, { useEffect, useState, useReducer } from 'react';
import './signIn.scss';
import FormInput from '../../components/formInput/formInput';
import CustomBtn from '../../components/customBtn/customBtn';
import { signInWithGoogle, auth } from '../../firebase/firebase';
import ACTIONS from '../../constants/actions';
//
const reducer = (state, action) => {
    switch (action.type){
        case ACTIONS.username:
        case ACTIONS.password:
            return state = {...state, [action.type]: action.payload};
        case ACTIONS.signIn:
            return state = {};
        default:
            break;
    }
}
const SignIn = props =>{
    const [state, dispatch] = useReducer(reducer, {});
    useEffect(()=>{
        console.log(`%cprops: ${JSON.stringify(props)}, state: ${JSON.stringify(state)}`, 'color:black;');
    }, [state]);
    const handleSignIn = async (event) =>{
        console.log(`%chandleSignIn fired`, 'color:green');
        event.preventDefault();
        try{
            const user = await auth.signInWithEmailAndPassword(state.username, state.password);
            console.log(`%cuser: ${JSON.stringify(user)}`, 'font-size:large; color: green'); 
            dispatch({type: ACTIONS.signIn});  
        }catch(error){
            console.error(error);
        }
    }
    //
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>{`Sign in with email & password`}</span>
            <form onSubmit={event=>handleSignIn(event)}>
                <FormInput label='Email' name={ACTIONS.username} type='email' value={state.username} dispatch={dispatch} />
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