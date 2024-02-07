import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink as RouterNavLink } from "react-router-dom"
import catLogo from "../assets/cat-logo.png"

const Header = () => {
  return (
    <div className="header-container">
      <Nav>
        <NavItem>
          <RouterNavLink to="/">
            <img
              src={catLogo}
              alt="thin outline of a cat with a long tail"
              className="logo"
            />
          </RouterNavLink>
        </NavItem>
        <NavItem>
          <RouterNavLink to="/catindex" className="nav-link">
            Meet All the Cats
          </RouterNavLink>
        </NavItem>
        <NavItem>
          <RouterNavLink to="/catnew" className="nav-link">
            Add Your Cat
          </RouterNavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default Header
