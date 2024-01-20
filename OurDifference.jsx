"use client";
import React from "react";
import { motion } from "framer-motion";
import "./OurDifference.css";
import { ourDiffFeatures } from "@/src/utils/data";
import Image from "next/image";
import {
  containerVariants,
  descriptionVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animations";
const OurDifference = () => {
  return (
    <div className="diff-wrapper">
      <div className="container">
        <div className="diff-container">
          {/* head of our difference */}
          <div className="diff-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              Our Difference
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              fair capital, hassle free
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={descriptionVariants}
              className="text"
            >
              {" "}
              our mission is to level the playing field for early stage growth
              capital
              <br />
              we provide capital that is unbiased, flexible and non dilute with
              the execution support to accelerate value creation
            </motion.span>
          </div>
          {/* feature of our difference */}
          <div className="diff-features">
            {ourDiffFeatures.map((feature, i) => (
              <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={containerVariants((i+1)*0.1)}
               key={i} className="diff-feature">
                <Image
                  src={feature.icon}
                  alt="feature"
                  width={128}
                  height={128}
                />
                <span className="sec-title">{feature.title}</span>
                <span className="description">{feature.des}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDifference;
