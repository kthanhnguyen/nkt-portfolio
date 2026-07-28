import React, { useState, useEffect, useRef, Fragment } from 'react'
import { data } from '../data/data'
import Modal from '../components/Modal'

const PAGE_SIZE = 9

export default function Portfolio() {
  const [mShow, setMShow] = useState(false)
  const [mId, setMId] = useState('01')
  const [mOut, setMOut] = useState(false)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const sentinelRef = useRef(null)

  useEffect(() => {
    document.title = 'Portfolio | NKT'
  }, [])

  useEffect(() => {
    if (visibleCount >= data.length) return

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, data.length))
      }
    })

    const sentinel = sentinelRef.current
    if (sentinel) observer.observe(sentinel)

    return () => observer.disconnect()
  }, [visibleCount])

  const openModal = (id) => {
    document.body.className = 'dis-scroll'
    setMId(id)
    setMShow(true)
    setMOut(false)
  }

  const closeModal = () => {
    document.body.className = ''
    setMShow(false)
    setMOut(true)
  }

  const closeMaskModal = (e) => {
    if (e.target.className === 'modal-background') {
      closeModal()
    }
  }

  return (
    <Fragment>
      <section id="portfolio">
        <div className="container">
          <h2 className="sec-ttl">Projects</h2>
          <div className="ttl-bar"></div>
          <ul className="list-portfolio grid-list">
            {data.slice(0, visibleCount).map((item, index) => (
              <li key={index}>
                <div className="image item" onClick={() => openModal(item.id)}>
                  <div className="bar">
                    <h2>{item.name}</h2>
                    <i></i>
                  </div>
                  <div className="main">
                    <div className="back">
                      <img src={item.imgMain} alt="" />
                    </div>
                    <div className="tags">
                      <div>
                        <ul>
                          {item.tags.map((tag, idx) => (
                            <li key={idx}>{tag}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="imgs"></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {visibleCount < data.length && (
            <div className="scroll-sentinel" ref={sentinelRef}></div>
          )}
        </div>
      </section>
      <Modal
        id={mId}
        active={mShow}
        mOut={mOut}
        closeModal={closeModal}
        closeMaskModal={closeMaskModal}
      />
    </Fragment>
  )
}
