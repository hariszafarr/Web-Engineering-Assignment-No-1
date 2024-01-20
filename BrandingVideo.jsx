'use client'
import React, { useRef } from 'react'
import './BrandingVideo.css'
import {motion, useScroll, useTransform} from 'framer-motion'
const BrandingVideo = () => {
    const ref=useRef(null)
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start end","end end"]
    })
const scale=useTransform(scrollYProgress,[0, 1],[.6, 1])
  return (
    
        <div className="branding-video-container">
            <div className="container">
                <motion.video
                ref={ref}
                style={{scale}}
                 className='brandingVideo' 
                 loop autoPlay muted controls="">
                    <source src='video.mp4' type='video/mp4'/>
                </motion.video>
            </div>
        </div>
        
  )
}

export default BrandingVideo
