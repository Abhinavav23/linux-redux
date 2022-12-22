import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../ReduxFolder/auth/authAction';

export const Login = () => {
    const nameRef = useRef();
    const dispatch = useDispatch();
    
    const loginUser = (e) => {
        e.preventDefault();
       dispatch(login(nameRef.current.value));

    //    dispatch({
    //     type: 'login', 
    //     payload: nameRef.current.value
    //    })
    }
    console.log('rendering Login');
  return (
    <form onSubmit={loginUser}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="" ref={nameRef}/>
        <button>Login</button>
    </form>
  )
}
