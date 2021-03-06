import React, { useState, useEffect, useRef, useReducer } from 'react';
import FormInput from '../../components/formInput/formInput';
import CustomBtn from '../../components/customBtn/customBtn';
import {auth, createUserProfileDocument, createUserWithEmailAndPassword } from '../../firebase/firebase';
import ACTIONS from '../../constants/actions';

const reducer = (state, action) =>{
    const type = action.type;
    switch(type){
        case ACTIONS.displayName:
        case ACTIONS.username:
        case ACTIONS.password:
        case ACTIONS.confirmPassword:
            return state = {...state, [action.type]: action.payload};
        case ACTIONS.logout:
        case ACTIONS.signUp:
            return state = {};
        default: 
            console.log(`action: ${JSON.stringify(action)}`);
            break;
    }
}

export default function SignUp() {
    const [state, dispatch] = useReducer(reducer, {});
    useEffect(()=>{
        console.log(`state: ${JSON.stringify(state)}`);
    });
    
    const handleChange = (e, type) =>{
        e.preventDefault();
        dispatch({type: type, payload: e.target.value});
    }
    return (
        <div className="sign-up">
            <h2 className="title">
                I do not have an account
            </h2>
            <span>
                sign up with your email and password
            </span>
            <form className='sign-up-form' onSubmit={async (event) =>{
                    event.preventDefault();
                    if(state.password === state.confirmPassword) {
                        try{
                            const { user } = await auth.createUserWithEmailAndPassword(state.username, state.password);
                            const {displayName} = state
                            await createUserProfileDocument(user, {displayName});
                            dispatch({type: ACTIONS.signUp});
                        } catch(error){
                            console.error(JSON.stringify(error));
                        }
                    }else{
                        alert('%cpassword values do not match', 'color:red;');
                    }
                }}>
                <FormInput type='text' label='Display Name' name='displayName' value={state.displayName} required dispatch={dispatch} />
                <FormInput type='email' label='Username' name='username' value={state.username} required dispatch={dispatch} />
                <FormInput type='password' label='Password' name='password' value={state.password} required dispatch={dispatch} />
                <FormInput type='password' label='confirmPassword' name='confirmPassword' value={state.confirmPassword} required dispatch={dispatch} />
                <CustomBtn type='submit'>Submit</CustomBtn>
            </form>
        </div>
    )
}
