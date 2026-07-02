import React from 'react'
import Particles from '@tsparticles/react'
import { Link } from 'react-router-dom'

const options = {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'image',
      options: {
        image: {
          src: '/img/starburst_white_300_drop_2.png',
          width: 100,
          height: 100,
        },
      },
    },
    opacity: {
      value: 0.7,
      random: false,
      animation: {
        enable: false,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      animation: {
        enable: false,
        speed: 20,
        minimumValue: 0.1,
        sync: false,
      },
    },
    links: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 5,
      direction: 'bottom',
      random: true,
      straight: false,
      outModes: {
        default: 'out',
      },
      bounce: false,
      attract: {
        enable: true,
        rotateX: 300,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onClick: {
        enable: true,
        mode: 'repulse',
      },
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.2,
      },
    },
  },
  detectRetina: true,
}

export default function MainVisual() {
  return (
    <section id="home">
      <div className="home__particles">
        <Particles options={options} />
        <div className="home__mainText">
          <div className="home__text">
            Hello, I'm <span className="home__text--highlight">Nguyen Kim Thanh</span>
            <br />
            I'm a front-end web developer.
          </div>
          <div className="text-center">
            <Link to="/portfolio" className="home__button">
              View my work <i className="mdi mdi-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
