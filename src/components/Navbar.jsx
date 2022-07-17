import React from 'react'
import {FaTimes} from 'react-icons/fa'

function Navbar(props) {
  return (
    <>
    <nav className='navbar'>
        <FaTimes className='navbar__close' onClick={props.closeNav}/>
        <ul className='navbar__list'>

            <li className='navbar__item' id='service'>services</li>
            <li className='navbar__item'>photos</li>
            <li className='navbar__item'>about us</li>
            <li className='navbar__item'>locations</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar