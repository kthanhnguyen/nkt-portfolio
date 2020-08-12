import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  toggle(e) {
    this.setState({ active: !this.state.active });
  }
  render() {
    return (
      <div className="navbar">
        <Link className="logo" to="/">
          <img src="/img/logo.png" alt="" />
        </Link>
        <nav className={this.state.active ? "active" : ""}>
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

        <div
          id="mobile-link"
          className={this.state.active ? "active" : ""}
          onClick={(e) => this.toggle(e)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}
