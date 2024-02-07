import React from "react"
import { Nav } from "reactstrap"
import { NavLink as RouterNavLink } from "react-router-dom"
import catLogo from "../assets/cat-logo.png"

const Header = () => {
  return (
    <Nav>
      <RouterNavLink to="/">
        <img
          src={catLogo}
          alt="thin outline of a cat with a long tail"
          className="logo"
        />
      </RouterNavLink>
      <RouterNavLink to="/catindex" className="nav-link">
        Meet All the Cats
      </RouterNavLink>
      <RouterNavLink to="/catnew" className="nav-link">
        Add Your Cat
      </RouterNavLink>
      <a
        target="blank"
        href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter"
        className="nav-link"
      >
        Adopt a Cat!
      </a>
    </Nav>
  )
}

export default Header
