import React from 'react'
import { createPortal } from 'react-dom'
import { Form } from './Form'

export const Modal = () => {
//   return (
//     <div>Modal</div>
//   )
    return createPortal(<Form/>, document.getElementById('modal'))
}
