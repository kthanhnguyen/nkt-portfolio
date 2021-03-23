import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { TweenMax, Expo } from "gsap/all";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };

    this.loading = null;
    this.loadingMenu = null;

  }

  toggle(e) {
    

    document.body.classList.toggle("dis-scroll");
    this.setState({ active: !this.state.active });

    const { active } = this.state;
    let vw = window.innerWidth, delay_time = 0;
    let elm = document.querySelectorAll("nav > a");

    if (!active) {
      this.loadingMenu = TweenMax.to(this.loading, 0.5, {
      x:-vw,
      ease: Expo.easeInOut
    });
    elm.forEach(item => {
      this.loading = TweenMax.to(item, 1.2, {
        x:-vw,
        scaleX: 1,
        delay: delay_time,
        ease: Expo.easeInOut
      });
      delay_time += .04;
      item.addEventListener('click', ()=> {
        document.body.className = "";
      })
    })
    } else {
      this.loading = TweenMax.to(this.loading, 0.8, {
        x:0,
        ease: Expo.easeInOut
      });
      elm.forEach(item => {
        this.loading = TweenMax.to(item, 1, {
          x:0,
          delay: delay_time,
          ease: Expo.easeInOut
        });
        delay_time += .02;
      })
    }
  }

  render() {
    return (
      <div className="navbar">
        <Link className="logo" to="/">
          <img src="/img/logo.png" alt="" />
        </Link>
        <nav className={this.state.active ? "active" : ""} ref={(div) => (this.loading = div)}>
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
