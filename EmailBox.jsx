'use client'
import React from 'react'
import {motion} from 'framer-motion'
import {LuMail} from 'react-icons/lu'
import './EmailBox.css'
import { containerVariants } from '@/src/utils/animations'
const EmailBox = () => {
  return (
    <motion.div
    initial={{
      width: ".5rem",
      borderRadius: "100%"
    }}
    whileInView={{
      width:"70%",
      borderRadius:"999px",
      transition:{
        type:"easeOut",
        duration:1,
      }
    }}
     className='email-box'>
    {/* icon */}
    <motion.div
    variants={containerVariants(0.6)}
    initial='offscreen'
    whileInView={"onscreen"}
    viewport={
    {once:true,}
    }
    >
     <LuMail size={30} color='grey'/>
    </motion.div>
    {/* INPUT */}
    <motion.input
     variants={containerVariants(0.7)}
    initial='offscreen'
    whileInView={"onscreen"}
    viewport={
    {once: true ,
    }
    }
     type="text"
    placeholder='Enter email address' />
    <motion.div
     variants={containerVariants(0.9)}
    initial='offscreen'
    whileInView={"onscreen"}
    viewport={
    {once:true,}
    }
     className="funded-btn">
      Get Funded
    </motion.div>
    </motion.div>
   
      
    
  )
}

export default EmailBox
