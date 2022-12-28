import React from 'react'
import { Login } from './Login'
import { Modal } from './Modal'
import { SearchBar } from './SearchBar'

export const Header = () => {
  return (
    <div class='header'>
        <div>Header</div>
        <SearchBar/>
        <Login/>
        <Modal/>
    </div>
  )
}
