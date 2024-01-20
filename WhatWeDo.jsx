"use client";
import React from "react";
import "./WhatWeDo.css";
import { features } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  descriptionVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animations";
const WhatWeDo = () => {
  return (
    <div className="WhatWeDo-wrapper">
      <div className="container">
        {/* head of the section */}
        <div className="WhatWeDo-container">
          <div className="head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              what we do
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              empowering founders with non dilutive capital and execution
              expertise
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={descriptionVariants}
              className="description"
            >
              here is how we can evaluate
            </motion.span>
          </div>
        </div>
        {/* two blocks */}
        <div className="blocks">
          {/* first block */}
          <div className="block">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="sec-title"
            >
              blue advances
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={descriptionVariants}
              className="text"
            >
              fund recurring growth expenses e.g. customer acquisition,
              inventory
            </motion.span>
            <div className="block-features">
              {features.slice(0, 3).map((feature, i) => (
                <motion.div
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={containerVariants((i + 1) * 0.1)}
                  className="block-feature"
                  key={i}
                >
                  <Image
                    src={feature.icon}
                    alt="feature"
                    width={60}
                    height={60}
                  />
                  <span>{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/* second block */}
          <div className="block">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="sec-title"
            >
              blue seed
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={descriptionVariants}
              className="text"
            >
              fund one-offs to scale e.g product, hiring
            </motion.span>
            <div className="block-features">
              {features.slice(3, 6).map((feature, i) => (
                <motion.div
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={containerVariants((i + 1) * 0.1)}
                  className="block-feature"
                  key={i}
                >
                  <Image
                    src={feature.icon}
                    alt="feature"
                    width={60}
                    height={60}
                  />
                  <span>{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* support block */}
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={containerVariants(0.4)}
          className="support"
        >
          <div className="left-side">
            <span className="sec-title"> blue growth support</span>
            <span className="description">
              data insight and full stack expertise to supercharge growth
            </span>
          </div>
          {/* right side */}
          <div className="right-side">
            <span className="text">
              actionable date insight by connecting revenue marketing and social
              media platform
            </span>
            <span className="text">
              {" "}
              on demand execution expertise at cost or revenue share across
              proposition design, engineering, marketing analytics, partnership,
              brand, intellectual property, market expansion,talent management
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
