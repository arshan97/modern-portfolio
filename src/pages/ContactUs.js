import { motion } from "framer-motion"
import React from "react"
import { pageAnimation } from "../animation/animate"

export const ContactUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      Contact Us
    </motion.div>
  )
}
