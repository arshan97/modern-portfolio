import React from "react"
import homeImage from "../img/home1.png"
import { About, Description, Hide, Image } from "../styles"
import { motion } from "framer-motion"
import { fade, photoAnim, titleAnim } from "../animation/animate"
import Wave from "./Wave"

export const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>

          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>

          <Hide>
            <motion.h2 variants={titleAnim}>true. </motion.h2>
          </Hide>
        </motion.div>

        <motion.p variants={fade}>
          Contact us for any photography or videograpghy ideas that you have. <br /> We have professionals with amazing skills to help you achieve it.
        </motion.p>

        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>

      <Image>
        <motion.img variants={photoAnim} src={homeImage} alt="Home" />
      </Image>

      <Wave />
    </About>
  )
}
