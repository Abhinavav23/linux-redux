import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';

export const Login = () => {
    const nameRef = useRef();
    const dispatch = useDispatch();
    const loginUser = (e) => {
        e.preventDefault();
       console.log( nameRef.current.value);
       dispatch({
        type: 'my name is abhinav'
        })
    }
  return (
    <form onSubmit={loginUser}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="" ref={nameRef}/>
        <button>Login</button>
    </form>
  )
}
