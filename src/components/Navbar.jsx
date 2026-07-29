import React, { useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import gsap from 'gsap'

export default function Navbar() {
  const [active, setActive] = useState(false)
  const navRef = useRef(null)

  function openMenu() {
    const vw = window.innerWidth
    let delayTime = 0
    const elm = document.querySelectorAll('nav > a')

    gsap.to(navRef.current, { duration: 0.5, x: -vw, ease: 'expo.inOut' })
    elm.forEach((item) => {
      gsap.to(item, { duration: 1.2, x: -vw, scaleX: 1, delay: delayTime, ease: 'expo.inOut' })
      delayTime += 0.04
    })
  }

  function closeMenu() {
    let delayTime = 0
    const elm = document.querySelectorAll('nav > a')

    gsap.to(navRef.current, { duration: 0.8, x: 0, ease: 'expo.inOut' })
    elm.forEach((item) => {
      gsap.to(item, { duration: 1, x: 0, delay: delayTime, ease: 'expo.inOut' })
      delayTime += 0.02
    })

    document.body.classList.remove('dis-scroll')
    setActive(false)
  }

  function toggle() {
    if (active) {
      closeMenu()
    } else {
      document.body.classList.add('dis-scroll')
      setActive(true)
      openMenu()
    }
  }

  function handleLinkClick() {
    if (active) closeMenu()
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
          onClick={handleLinkClick}
          className={({ isActive }) => `page-link home-link${isActive ? ' active' : ''}`}
        >
          <i className="icon-hom"></i>
        </NavLink>
        <NavLink
          to="/about"
          onClick={handleLinkClick}
          className={({ isActive }) => `page-link about-link${isActive ? ' active' : ''}`}
        >
          <i className="icon-prof"></i>
        </NavLink>
        <NavLink
          to="/skills"
          onClick={handleLinkClick}
          className={({ isActive }) => `page-link skills-link${isActive ? ' active' : ''}`}
        >
          <i className="icon-gear"></i>
        </NavLink>
        <NavLink
          to="/portfolio"
          end
          onClick={handleLinkClick}
          className={({ isActive }) => `page-link portfolio-link${isActive ? ' active' : ''}`}
        >
          <i className="icon-eye"></i>
        </NavLink>
        <NavLink
          to="/contact"
          onClick={handleLinkClick}
          className={({ isActive }) => `page-link contact-link${isActive ? ' active' : ''}`}
        >
          <i className="icon-mail"></i>
        </NavLink>
      </nav>
      <ul className="list-sns">
        <li>
          <a href="https://www.linkedin.com/in/thanhnguyen901" target="_blank" rel="noopener noreferrer">
            <i className="mdi mdi-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://github.com/kthanhnguyen" target="_blank" rel="noopener noreferrer">
            <i className="mdi mdi-github" />
          </a>
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
