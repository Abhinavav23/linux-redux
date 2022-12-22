import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../ReduxFolder/auth/authAction';

export const Profile = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.authUser.name);

  // console.log('rendering Profile');
  const logoutUser = () => {
    dispatch(logout());

    // dispatch({
    //   type: 'logout'
    // })
  }
  return (
    <>
        <h3>MY Profile</h3>
        <div>Name: {userName}</div>
        <button onClick={logoutUser}>logout</button>
    </>
  )
}
