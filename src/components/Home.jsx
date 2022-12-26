import React from 'react'
import { useSelector } from 'react-redux';
import { AppName } from './AppName';
import CountClass from './CountClass';
import { Login } from './Login'
import { Profile } from './Profile'
import { Shop } from './Shop';

export const Home = () => {
    // selecting and using values from redux-store
    const loggedInState = useSelector((result) => {
        // console.log(result);
        return result.authUser.isLoggedIn
    });
    // console.log('rendering Home');
  return (
   <>
    <AppName/>
    {loggedInState ? <Profile/>:  <Login/>}
    {/* <Login/>
    <Profile/> */}

    {/* class component with redux functionalities */}
    {/* <CountClass/> */}

    <Shop/>
   </>
  )
}
