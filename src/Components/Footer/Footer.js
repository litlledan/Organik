import React from 'react'
import logo from '../../assets/SVG/svg/logo.svg'
import inst from '../../assets/SVG/svg/instagram.svg'
import face from '../../assets/SVG/svg/facebook.svg'
import twit from '../../assets/SVG/svg/twitter.svg'
import pin from '../../assets/SVG/svg/pinteres.svg'
import input from '../../assets/images/input-img.png'

import './Footer.css'


function Footer() {
  return (
    <div className='footer'>
      <div className="newslatter container">
        <img src={input} alt="input-img" />
        <div className="input-div">
          <div className="input-div-heading">
            <h2>Subscribe to our Newsletter</h2>
          </div>
          <div className="input-div-button">
            <input type="text" id="latter-input" placeholder="Your Email Address" />
            <button id="latter-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-title container">
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <div className="contact-footer">
            <div className="form-footer">
              <h2>Email</h2>
              <p>needhelp@Organia.com</p>
            </div>
            <div className="form-footer">
              <h2>Phone</h2>
              <p>666 888 888</p>
            </div>
            <div className="form-footer">
              <h2>Address</h2>
              <p>88 road, broklyn street, USA </p>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-about">
          <div className="logo-footer">
            <img src={logo} alt="logo-footer" />
            <h2>Organick</h2>
          </div>
          <div className="content-footer">
            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing </p>
            <div className="content-footer-a">
              <a href="https://www.instagram.com/" target="_blank"><img src={inst} alt="instagram" /></a>
              <a href="https://www.facebook.com/?locale=ru_RU" target="_blank"><img src={face} alt="facebook" /></a>
              <a href="https://twitter.com/?lang=ru" target="_blank"><img src={twit} alt="" /></a>
              <a href="https://www.pinterest.com/" target="_blank"><img src={pin} alt="" /></a>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-page">
          <h2>Utility Pages</h2>
          <div className="footer-page-title">
            <p>Style Guide</p>
            <p>404 Not Found</p>
            <p>Password Protected</p>
            <p>Licences</p>
            <p>Changelog</p>
          </div>
        </div>
      </div>
      <div className="footer-div-line"></div>
      <div className="footer-Organick">Copyright ©
        <span>Organick</span> | Designed by <span>VictorFlow</span> Templates - Powered by <span>Webflow</span></div>

    </div>
  )
}

export default Footer