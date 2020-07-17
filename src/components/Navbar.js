import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="logo" to="/">
          <img src="/img/logo.png" alt="" />
        </Link>
        <nav>
          <NavLink
            to="/"
            exact
            className="page-link home-link"
            activeClassName="active"
          >
            <i className="icon-hom"></i>
          </NavLink>
          <NavLink
            to="/about"
            exact
            className="page-link about-link"
            activeClassName="active"
          >
            <i className="icon-prof"></i>
          </NavLink>
          <NavLink
            to="/skills"
            className="page-link skills-link"
            activeClassName="active"
          >
            <i className="icon-gear"></i>
          </NavLink>
          <NavLink
            to="/portfolio"
            className="page-link portfolio-link"
            exact
            activeClassName="active"
          >
            <i className="icon-eye"></i>
          </NavLink>
          <NavLink
            to="/contact"
            exact
            className="page-link contact-link"
            activeClassName="active"
          >
            <i className="icon-mail"></i>
          </NavLink>
        </nav>
        <ul className="list-sns">
          <li>
            <Link to="#" target="_blank">
              <i className="mdi mdi-twitter" />
            </Link>
          </li>
          <li>
            <Link to="#" target="_blank">
              <i className="mdi mdi-linkedin" />
            </Link>
          </li>
          <li>
            <Link to="#" target="_blank">
              <i className="mdi mdi-facebook" />
            </Link>
          </li>
        </ul>

        <Link to="" id="mobile-link">
          <span></span>
          <span></span>
          <span></span>
        </Link>
      </div>
    );
  }
}
