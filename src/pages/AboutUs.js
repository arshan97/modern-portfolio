import { motion } from "framer-motion"
import React from "react"
import { pageAnimation } from "../animation/animate"
import { AboutSection } from "../components/AboutSection"
import FaqSection from "../components/FaqSection"
import ServicesSection from "../components/ServicesSection"

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  )
}

export default AboutUs
