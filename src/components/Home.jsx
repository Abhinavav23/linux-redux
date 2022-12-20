import React from 'react'
import { useSelector } from 'react-redux';
import { Login } from './Login'
import { Profile } from './Profile'

export const Home = () => {
    // selecting and using values from redux-store
    const loggedInState = useSelector((result) => {
        console.log(result);
        return result.isLoggedIn
    });
    console.log(loggedInState);

  return (
   <>
    <h3>Home Page</h3>
    {loggedInState ? <Profile/>:  <Login/>}
    {/* <Login/>
    <Profile/> */}
   </>
  )
}
