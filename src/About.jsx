import React from 'react'
import { createPortal } from 'react-dom'

export const About = () => {
  return createPortal( <div>About</div>, document.getElementById('myAbout'));
}
