import React, { useEffect, Fragment } from 'react'
import { AwesomeButton } from '@rcaferati/react-awesome-button'

export default function About() {
  useEffect(() => {
    document.title = 'About | NKT'
  }, [])

  return (
    <Fragment>
      <section id="about">
        <div className="container">
          <div className="flex row">
            <div className="flex flex-50">
              <h2 className="sec-ttl">About</h2>
              <div className="ttl-bar"></div>
              <div className="about__img onlySp"><img src="/img/about.jpg" alt="" /></div>
              <div className="about__text">
                <p>
                  Hi, I'm Thanh, a Senior Frontend Developer with 7+ years of
                  experience building production-ready web applications for
                  SaaS platforms serving 1,000+ users. My core stack is Vue
                  (2/3), complemented by strong experience in React.
                </p>
                <p>
                  I specialize in refactoring legacy systems and improving
                  frontend performance — work that has cut reported UI bugs
                  by ~30% — while delivering scalable features within Agile,
                  cross-functional teams (BA, UX/UI, Backend, QC).
                </p>
                <p>
                  Beyond hands-on development, I mentor junior developers
                  through code reviews and help build reusable component
                  libraries and design systems for cross-team consistency.
                  I'm now looking for a senior-level role where I can
                  contribute to scalable architecture and team growth.
                </p>
                <div className="about__btn">
                  <AwesomeButton
                    type="primary"
                    href="/cv/Frontend_NguyenKimThanh.pdf"
                    containerProps={{ target: '_blank', rel: 'noopener noreferrer' }}
                  >
                    <svg
                      className="i-svg imgCv"
                      height={50}
                      version="1.1"
                      width={50}
                      viewBox="0 0 512 512"
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      xmlSpace="preserve"
                    >
                      <g><g><path d="M414.007,148.75c5.522,0,10-4.477,10-10V30c0-16.542-13.458-30-30-30h-364c-16.542,0-30,13.458-30,30v452c0,16.542,13.458,30,30,30h364c16.542,0,30-13.458,30-30v-73.672c0-5.523-4.478-10-10-10c-5.522,0-10,4.477-10,10V482c0,5.514-4.486,10-10,10h-364c-5.514,0-10-4.486-10-10V30c0-5.514,4.486-10,10-10h364c5.514,0,10,4.486,10,10v108.75C404.007,144.273,408.485,148.75,414.007,148.75z" /></g></g>
                      <g><g><path d="M212.007,54c-50.729,0-92,41.271-92,92c0,26.317,11.11,50.085,28.882,66.869c0.333,0.356,0.687,0.693,1.074,1c16.371,14.979,38.158,24.13,62.043,24.13c23.885,0,45.672-9.152,62.043-24.13c0.387-0.307,0.741-0.645,1.074-1c17.774-16.784,28.884-40.552,28.884-66.869C304.007,95.271,262.736,54,212.007,54z M212.007,218c-16.329,0-31.399-5.472-43.491-14.668c8.789-15.585,25.19-25.332,43.491-25.332c18.301,0,34.702,9.747,43.491,25.332C243.405,212.528,228.336,218,212.007,218z M196.007,142v-6.5c0-8.822,7.178-16,16-16s16,7.178,16,16v6.5c0,8.822-7.178,16-16,16S196.007,150.822,196.007,142z M269.947,188.683c-7.375-10.938-17.596-19.445-29.463-24.697c4.71-6.087,7.523-13.712,7.523-21.986v-6.5c0-19.851-16.149-36-36-36s-36,16.149-36,36v6.5c0,8.274,2.813,15.899,7.523,21.986c-11.867,5.252-22.088,13.759-29.463,24.697c-8.829-11.953-14.06-26.716-14.06-42.683c0-39.701,32.299-72,72-72s72,32.299,72,72C284.007,161.967,278.776,176.73,269.947,188.683z" /></g></g>
                      <g><g><path d="M266.007,438h-54c-5.522,0-10,4.477-10,10s4.478,10,10,10h54c5.522,0,10-4.477,10-10S271.529,438,266.007,438z" /></g></g>
                      <g><g><path d="M266.007,382h-142c-5.522,0-10,4.477-10,10s4.478,10,10,10h142c5.522,0,10-4.477,10-10S271.529,382,266.007,382z" /></g></g>
                      <g><g><path d="M266.007,326h-142c-5.522,0-10,4.477-10,10s4.478,10,10,10h142c5.522,0,10-4.477,10-10S271.529,326,266.007,326z" /></g></g>
                      <g><g><path d="M266.007,270h-142c-5.522,0-10,4.477-10,10s4.478,10,10,10h142c5.522,0,10-4.477,10-10S271.529,270,266.007,270z" /></g></g>
                    </svg>{' '}
                    View My CV
                  </AwesomeButton>
                </div>
              </div>
            </div>
            <div className="flex flex-50">
              <div className="about__img onlyPc"><img src="/img/about.jpg" alt="" /></div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
