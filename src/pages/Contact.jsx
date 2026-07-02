import React, { useEffect } from 'react'
import { AwesomeButton } from '@rcaferati/react-awesome-button'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | NKT'
  }, [])

  return (
    <section id="contact">
      <div className="container">
        <h2 className="sec-ttl">Contact</h2>
        <div className="ttl-bar"></div>
        <h3>Get in touch</h3>
        <p>
          If you wanna get in touch, talk to me about a project collaboration
          or just say hi,
          <br /> fill up the awesome form below or send an email to{' '}
          <a href="mailto:nguyenkimthanh901@gmail.com">
            nguyenkimthanh901@gmail.com
          </a>{' '}
          and ~let's talk.
        </p>

        <form className="formContact">
          <ul>
            <li className="half">
              <input
                className="input__field input__field--hoshi"
                placeholder="Name"
                type="text"
                name="name"
                autoComplete="off"
              />
              <label className="input__label input__label--hoshi"></label>
            </li>
            <li className="half">
              <input
                className="input__field input__field--hoshi"
                placeholder="Email"
                type="email"
                name="email"
                autoComplete="off"
              />
              <label className="input__label input__label--hoshi"></label>
            </li>
            <li>
              <input
                className="input__field input__field--hoshi"
                placeholder="Subject"
                type="text"
                name="subject"
              />
              <label className="input__label input__label--hoshi"></label>
            </li>
            <li>
              <textarea
                className="input__field--hoshi"
                placeholder="Message"
                name="msg"
                defaultValue={''}
              />
              <label className="input__label input__label--hoshi"></label>
            </li>
            <li>
              <input
                id="submit"
                type="submit"
                className="flat-button"
                defaultValue="SEND"
              />
            </li>
          </ul>
        </form>
        <h3>Let's get social</h3>
        <ul className="list-socical">
          <li>
            <AwesomeButton type="facebook" href="#" target="_blank">
              <svg className="i-svg" height={50} version="1.1" width={50} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve">
                <path d="M27.845,47.469V27.81h8.426l1.404-8.425h-9.83v-4.213c0-2.81,1.406-4.213,4.213-4.213h4.213V2.531c-1.405,0-4.55,0-7.021,0c-7.021,0-9.83,4.213-9.83,11.234v5.618h-8.425v8.424h8.425v19.661H27.845L27.845,47.469z" fill="#ffffff" />
              </svg>{' '}
              Facebook
            </AwesomeButton>
          </li>
          <li>
            <AwesomeButton type="github" href="https://github.com/kthanhnguyen" target="_blank">
              <svg className="i-svg" height={50} version="1.1" width={50} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve">
                <path d="M24.999,2.48c-12.75,0-23.087,10.338-23.087,23.09c0,10.199,6.613,18.854,15.791,21.907c1.154,0.211,1.518-0.474,1.518-1.084c0-0.547,0.011-2.082,0-4.01c-6.422,1.398-7.753-3.038-7.753-3.038c-1.048-2.671-2.562-3.377-2.562-3.377c-2.095-1.433,0.158-1.407,0.158-1.407c2.317,0.163,3.538,2.383,3.538,2.383c2.059,3.522,5.403,2.505,6.717,1.916c0.21-1.491,0.808-2.51,1.468-3.087C15.66,35.188,10.27,33.211,10.27,24.361c0-2.521,0.9-4.581,2.376-6.194c-0.239-0.584-1.031-2.932,0.226-6.112c0,0,1.939-0.62,6.349,2.369c1.841-0.513,3.817-0.768,5.78-0.777c1.962,0.009,3.938,0.264,5.781,0.777c4.409-2.988,6.346-2.369,6.346-2.369c1.258,3.18,0.466,5.528,0.229,6.112c1.478,1.613,2.373,3.673,2.373,6.194c0,8.872-5.397,10.823-10.543,11.392c0.828,0.717,1.582,2.101,1.582,4.255c0,2.887,0,5.632,0,6.392c0,0.617,0.372,1.302,1.544,1.076c9.167-3.059,15.776-11.708,15.776-21.905C48.089,12.818,37.75,2.48,24.999,2.48z" fill="#ffffff" />
              </svg>
              GitHub
            </AwesomeButton>
          </li>
          <li>
            <AwesomeButton type="primary" href="/" target="_blank">
              <svg className="i-svg" height={50} version="1.1" width={50} viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                <g><g><path d="M414.007,148.75c5.522,0,10-4.477,10-10V30c0-16.542-13.458-30-30-30h-364c-16.542,0-30,13.458-30,30v452c0,16.542,13.458,30,30,30h364c16.542,0,30-13.458,30-30v-73.672c0-5.523-4.478-10-10-10c-5.522,0-10,4.477-10,10V482c0,5.514-4.486,10-10,10h-364c-5.514,0-10-4.486-10-10V30c0-5.514,4.486-10,10-10h364c5.514,0,10,4.486,10,10v108.75C404.007,144.273,408.485,148.75,414.007,148.75z" /></g></g>
              </svg>{' '}
              Preview My CV
            </AwesomeButton>
          </li>
        </ul>
      </div>
    </section>
  )
}
