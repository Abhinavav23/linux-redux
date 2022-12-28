import React, { useRef, useState } from 'react'
import { SearchBar } from './SearchBar';

export const Form = () => {
    const usernameRef = useRef();
    const login = () => {
    }

  return (
    <>
        <form action="" onSubmit={login}>
            <label htmlFor="username">username</label>
            <input type="text" name="" id="username" ref={usernameRef}/>
        </form>
        <SearchBar/>
    </>
  )
}
