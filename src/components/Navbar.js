import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Navbar = () => {
  return (
    <Nav>
      <h1>Portfolio</h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
      </ul>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem 10rem;

  li {
    transition: 0.3s ease-in-out;
    &:hover {
      border-bottom: 1px solid white;
    }
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.6rem;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30vw;
  }

  h1 {
    color: #fff;
  }
`
