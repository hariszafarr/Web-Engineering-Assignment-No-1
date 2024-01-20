// 'use client'
import React from 'react'
import './Testimonial.css'
// import { motion } from 'framer-motion'
import SlickSlider from './SlickSlider'
const Testimonial = () => {
  return (
    <div className="t-wrapper">
        <div className="container">
            <div className="t-container">
            {/* testimonial head section */}
               <div className="t-head">
                <span className='tag'>Testimonial</span>
                <span className='title'>access capital that complement traditional funding options</span>
                <span className="description">what people say about us</span>
               </div>
                
            </div>
               {/* testimonial slider  */}
        </div>  
               <SlickSlider/>
    </div>
  )
}

export default Testimonial
