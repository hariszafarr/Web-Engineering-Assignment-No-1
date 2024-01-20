'use client'
import React from 'react'
import './Footer.css'
import EmailBox from '../EmailBox/EmailBox'
import { Link } from 'react-scroll'
const Footer = () => {
  return (
    <div className="f-wrapper">
        <div className="container">
            <div className="f-container">
                <span className='title'>get funded today</span>
                <EmailBox/>
                <hr/>
                <div className="f-menu">
                <Link to="hero-wrapper" spy={true} smooth={true}>

                <span>home</span>
                </Link>
                <Link to="WhatWeDo-wrapper" spy={true} smooth={true}>
              <span>what we do</span>
              </Link>
              <Link to="how-wrapper" spy smooth offset={100}>

              <span>how it work</span>
              </Link>
              <Link to="invest-wrapper" spy smooth>

              <span>who we invest in</span>
              </Link>
              <Link to="t-wrapper" spy smooth offset={100}>

              <span>testimonials</span>
              </Link>
                </div>
                <hr/>
                <span className='text'>made with ❤️ by Fahim ud din </span>
            </div>
        </div>
    </div>
  )
}

export default Footer
