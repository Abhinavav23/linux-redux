import React from 'react'
import { About } from './About'
import { Footer } from './componentsV2/Footer'
import { Header } from './componentsV2/Header'
import { Home } from './Home'

export const AppV2 = () => {
  return (
    <div className='app'>
        <h2>APP V2</h2>
        {/* <Header/>
        <Footer/> */}
        <div id='myAbout'>
            
        </div>
        <Home/>
    </div>
  )
}
