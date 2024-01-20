'use client'
import React from 'react'
import './Hero.css'
import EmailBox from '../EmailBox/EmailBox'
import {motion} from 'framer-motion'
import { HeroData } from '@/src/utils/data'
import { animate, delay, spring } from 'framer-motion'

const Hero = () => {
  const variants=(delay)=>({
    initial:{
      y:"18rem"
    },
    animate:{
      y:"0rem",
      transition:{
        type:"spring",
        damping:25,
        duration:2.5,
        delay
      }
    }
  })
  const imagVariants=()=>({
    initial:{
      y:"18rem"
    },
    animate:{
      y:"0rem",
      transition:{
        type:"spring",
        duration:2,
        stiffness:30,
       
      }
    }
  })
  return (
    <div className="hero-wrapper">
        <div className="container">
            <img src="hero/hero-arrow.png" alt="arrow" className='hero-arrow' />
        <div className='hero-container'>
     
     {/* left side  */}
        <div className="left-side">
            <div className="img-row">
              {
                HeroData.slice(0,3).map((person,i)=>(
                  <div className='person-pill' key={i}>
                    <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{backgroundColor:person.bg}}
                     className="person-pill-bg">
                      <motion.img
                      initial={"initial"}
                    animate={"animate"}
                    variants={imagVariants()}
                       src={person.src} alt={person.src} />
                    </motion.div>
                  </div>
                ))
              }
            </div>
          <div className="img-row">
          {
                HeroData.slice(3,6).map((person,i)=>(
                  <div className='person-pill' key={i}>
                    <motion.div
                      initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{backgroundColor:person.bg}}
                     className="person-pill-bg">
                      <motion.img
                      initial={"initial"}
                    animate={"animate"}
                    variants={imagVariants()}
                       src={person.src} alt={person.src} />
                    </motion.div>
                  </div>
                ))
              }
          </div>
        </div>
        {/* right side  */}
        <div className="right-side">
        <div className="hero-title">
            <span>Redefine How</span>
            <span>You Grow Your</span>
             <span>Digital Business</span>
        </div>
        <div className="hero-des">
            Revenue base funding and execution support designed for early stage founders
        </div>
        <EmailBox/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hero
