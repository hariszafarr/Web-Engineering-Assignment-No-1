'use client'
import React from "react";
import {motion} from 'framer-motion'
import "./HowItWork.css";
import { hitFeatures } from "@/src/utils/data";
import Image from "next/image";
import { descriptionVariants, tagVariants, titleVariants } from "@/src/utils/animations";
const HowItWork = () => {
    const featureVariants={
        offscreen:{
            scale:0.5
        },
        onscreen:{
            scale:1,
            transition:{
                type:"spring",
                duration: 1.5,
            },
        },
    }
  return (
    <div className="how-wrapper">
      <div className="container">
        <div className="how-container">
          {/* head of how it works */}
          <div className="head">
            <motion.span
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
             className="tag">how it work</motion.span>
            <motion.span
             initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
             className="title">
              unlocking potential along the growth journey
            </motion.span>
          </div>
          {/* feature of how it works */}
          <div className="how-features">
            {hitFeatures.map((feature, i) => (
              <motion.div
               initial="offscreen"
            whileInView={"onscreen"}
            variants={featureVariants}
               className="how-feature" key={i}>
                {/* left side of how it works */}
                <motion.div
                initial={{opacity:0, x:-100}}
                whileInView={{
                    opacity:1,
                    x:0,
                    transition:{
                        type:"easeIn",
                        duration:1,
                        delay:.7,
                    },
                }}
                 className="detail">
                  <motion.span
                
                   className="description">0{i + 1}</motion.span>
                  <motion.span
            
                   className="sec-title">{feature.title}</motion.span>
                  <motion.span
                  
                   className="text">{feature.des}</motion.span>
                </motion.div>
                {/* right side of how it works */}
                <div className="icon">
                  <Image
                    src={feature.icon}
                    alt="feature"
                    width={128}
                    height={128}
                    style={{translate: '55% 0rem'}}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
