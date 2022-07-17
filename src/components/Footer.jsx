import React from 'react'
import {FaInstagram, FaFacebook, FaEnvelope} from 'react-icons/fa'

function Footer() {
  return (
    <footer className='footer'>
        <div className="container footer--wrapper">
            <div className="footer__item footer__socials">
                <FaInstagram className='footer__socials--icon' />
                <FaFacebook className='footer__socials--icon' />
                <FaEnvelope className='footer__socials--icon' />
            </div>
            <div className="footer__item">
                Looks and Style | 2022 All rights reserved | Website by <span>Gawusu Razak</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer