import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Loader() {
  const loadingRef = useRef(null)
  const progressBarRef = useRef(null)

  useEffect(() => {
    const el = loadingRef.current
    const bar = progressBarRef.current

    gsap.fromTo(el, { x: '-100%', display: 'none' }, { x: '0%', display: 'block', duration: 0.5, ease: 'power4.out' })

    gsap.fromTo(bar, { width: 0 }, { width: '100%', duration: 1 })

    const hideTimer = setTimeout(() => {
      gsap.fromTo(el, { x: '0%' }, { x: '100%', duration: 0.6, ease: 'power4.in' })
    }, 2000)

    return () => {
      clearTimeout(hideTimer)
      gsap.killTweensOf(el)
      gsap.killTweensOf(bar)
    }
  }, [])

  return (
    <div className="loading" id="loading" ref={loadingRef}>
      <div className="inner">
        <div className="loading-logo">
          <img src="/img/logo.png" alt="" />
        </div>
        <p>Loading...</p>
        <div className="progress-bar">
          <div
            className="progress-bar_bg"
            id="progress-bar_bg"
            ref={progressBarRef}
          ></div>
        </div>
      </div>
    </div>
  )
}
