import React, {useRef} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

function Header() {
  const nav = useRef()

  function openNav() {
    nav.current.style.width = '250px';    
  }

  function closeNav(){
    nav.current.style.width = '0';
  }

  const scrollToSection = (e) => {
    e.preventDefault()
    const link = e.target.getAttribute('href')
    document.querySelector(link).scrollIntoView({behavior: 'smooth'})
  }

  return (
    <header className='header'>
      <div className="logo">
        <img src="./images/logo/logo1.png" alt="looksnstyle" />
      </div>
      <nav className='nav' onClick={scrollToSection}>
        <ul className='nav__list'>
        <li className='nav__item'><a className='navlink' href="#aboutus">about us</a></li>
          <li className='nav__item'><a className='navlink' href="#services">services</a></li>
          <li className='nav__item'><a className='navlink' href="#photos">photos</a></li>
          <li className='nav__item'><a className='navlink' href="#contact">contact</a></li>
          <li className='nav__item'><a className='navlink' href="#career">career</a></li>
        </ul>
      </nav>
      <nav className='mobile--nav' ref={nav}>
        <FaTimes className='icon close' onClick={closeNav}/>
        <ul className='nav__list'>
          <li onClick={closeNav} className='nav__item'><a className='navlink' href="#services">services</a></li>
          <li onClick={closeNav} className='nav__item'><a className='navlink' href="#aboutus">about us</a></li>
          <li onClick={closeNav} className='nav__item'><a className='navlink' href="#photos">photos</a></li>
          <li onClick={closeNav} className='nav__item'><a className='navlink' href="#career">career</a></li>
          <li onClick={closeNav} className='nav__item'><a className='navlink' href="#contact">contact</a></li>
        </ul>
      </nav>
      <FaBars onClick={openNav} className='hamburger--menu'/>
    </header>
  )
}

export default Header