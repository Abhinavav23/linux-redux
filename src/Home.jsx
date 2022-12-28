import React, { lazy, Suspense } from 'react'
import { useState } from 'react'
import { About } from './About'
// import { Profile } from './componentsV2/Profile';

// lazy import
const Profile = lazy(() => import('./componentsV2/Profile'))

export const Home = () => {
    const[showProfile, setShowFile] = useState(false);
  return (
    <div className='home'>
        <div>Home</div>
        {/* <About/> */}
        <button onClick={() => setShowFile(true)}>view Profile</button>
        { showProfile && <Suspense fallback={'loading'}><Profile/></Suspense>}
    </div>
  )
}
