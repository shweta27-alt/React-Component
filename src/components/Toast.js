import React from 'react';
import './Toast.css'

const Toast = () => {
  return ( 
    <div className='toast-container'>
        <div className='title-cross-container'>
        <p>Toast Message</p> 
        <img src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png" alt="cross-icon" className='cross-arrow'/>
        </div>
     
      <p>This is toast message to display info</p>
    </div>
  )
}

export default Toast
