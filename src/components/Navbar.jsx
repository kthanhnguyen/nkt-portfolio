import React, { useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import gsap from 'gsap'

export default function Navbar() {
  const [active, setActive] = useState(false)
  const navRef = useRef(null)

  function toggle() {
    document.body.classList.toggle('dis-scroll')
    const nextActive = !active
    setActive(nextActive)

    const vw = window.innerWidth
    let delayTime = 0
    const elm = document.querySelectorAll('nav > a')

    if (nextActive) {
      gsap.to(navRef.current, { duration: 0.5, x: -vw, ease: 'expo.inOut' })
      elm.forEach((item) => {
        gsap.to(item, { duration: 1.2, x: -vw, scaleX: 1, delay: delayTime, ease: 'expo.inOut' })
        delayTime += 0.04
        item.addEventListener('click', () => {
          document.body.className = ''
        })
      })
    } else {
      gsap.to(navRef.current, { duration: 0.8, x: 0, ease: 'expo.inOut' })
      elm.forEach((item) => {
        gsap.to(item, { duration: 1, x: 0, delay: delayTime, ease: 'expo.inOut' })
        delayTime += 0.02
      })
    }
  }

  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <img src="/img/logo.png" alt="" />
      </Link>
      <nav className={active ? 'active' : ''} ref={navRef}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => `page-link home-link${isActive ? ' active' : ''}`}
        >
          <i className="icon-hom"></i>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `page-link about-link${isActive ? ' active' : ''}`}
        >
          <i className="icon-prof"></i>
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => `page-link skills-link${isActive ? ' active' : ''}`}
        >
          <i className="icon-gear"></i>
        </NavLink>
        <NavLink
          to="/portfolio"
          end
          className={({ isActive }) => `page-link portfolio-link${isActive ? ' active' : ''}`}
        >
          <i className="icon-eye"></i>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `page-link contact-link${isActive ? ' active' : ''}`}
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
        className={active ? 'active' : ''}
        onClick={toggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
