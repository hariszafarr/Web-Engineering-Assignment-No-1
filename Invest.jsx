'use client'
import React from 'react'
import { motion } from 'framer-motion'
import './Invest.css'
import { whoWeInvest } from '@/src/utils/data'
import { containerVariants, tagVariants, titleVariants } from '@/src/utils/animations'
const Invest = () => {
  return (
    <div className="invest-wrapper">
        <div className="container">
            <div className="invest-container">
                {/* left side of who we invest in */}
                <div className="invest-left">
                    <div className="invest-head">
                        <motion.span
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                         className='tag'>who we invest in</motion.span>
                        <motion.span
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                         className='title'>digital businesses <br/> with early traction</motion.span>
                    </div>
                    {/* feature of the who we invest in section */}
                    <div className="invest-features">
                        {
                            whoWeInvest.map((feature,i)=>(
                                <motion.div
                                 initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants(i * 0.5 + 1)}
                                 className='invest-feature ' key={i}>
                                    <span
                                   
                                     className='description'>{feature.title}</span>
                                    <span
                                    
                                     className='text'>{feature.des}</span>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
                {/* right side of who we invest in */}
                <div className="invest-right">
                    <motion.img
                    variants={containerVariants(0.5)}
                    initial="offscreen"
                    whileInView={"onscreen"}
                     src="persons.png" alt="persons" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Invest
