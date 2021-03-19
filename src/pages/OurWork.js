import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import athlete from "../img/athlete-small.png"
import theracer from "../img/theracer-small.png"
import goodtimes from "../img/goodtimes-small.png"
import { lineAnim, pageAnimation } from "../animation/animate"
import { motion } from "framer-motion"

export const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Movie>
        <h2>The Athlete</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="athlete" />
        </Link>
      </Movie>

      <Movie>
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="the racer" />
        </Link>
      </Movie>

      <Movie>
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="good times" />
        </Link>
      </Movie>
    </Work>
  )
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
    color: #fff;
  }
`

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
`
