import React, { useEffect } from 'react'
import TagCanvas from '../helpers/tagcanvas'
import { Link } from 'react-router-dom'

export default function Skills() {
  useEffect(() => {
    document.title = 'Skills | NKT'

    TagCanvas.textColour = '#ffffff'
    TagCanvas.outlineThickness = 0.5
    TagCanvas.outlineColour = '#FE0853'
    TagCanvas.maxSpeed = 0.06
    TagCanvas.freezeActive = true
    TagCanvas.shuffleTags = true
    TagCanvas.shape = 'sphere'
    TagCanvas.zoom = 0.9
    TagCanvas.noSelect = true
    TagCanvas.textFont = null
    TagCanvas.pinchZoom = true
    TagCanvas.freezeDecel = true
    TagCanvas.fadeIn = 3000
    TagCanvas.initial = [0.3, -0.1]
    TagCanvas.depth = 1.4
    TagCanvas.Start('myCanvas')
  }, [])

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="flex row">
          <div className="flex-50 skills__info">
            <h2 className="sec-ttl">Skills</h2>
            <div className="ttl-bar"></div>
            <p>
              My main area of expertise is frontend development, with a
              strong focus on Vue (2/3) and solid experience across the
              React ecosystem.
            </p>
            <p>
              Worked on production-ready SaaS platforms — covering
              component-based architecture, state management (Vuex, Redux),
              and styling systems (Tailwind CSS, Material UI, Vuetify,
              Bootstrap).
            </p>
            <p>
              Comfortable across the full delivery pipeline: Vite/Gulp
              builds, Docker, CI/CD with Azure DevOps and GitHub Actions, and
              collaborating with backend teams via REST APIs, Node.js, and
              .NET.
            </p>
          </div>
          <div className="flex-50">
            <canvas width="500" height="500" id="myCanvas">
              <p>Anything in here will be replaced on browsers that support the canvas element</p>
              <ul>
                <li><Link to="https://vuejs.org/">Vue 2/3</Link></li>
                <li><Link to="https://nuxt.com/">Nuxt</Link></li>
                <li><Link to="https://react.dev/">React</Link></li>
                <li><Link to="https://nextjs.org/">Next.js</Link></li>
                <li><Link to="https://en.wikipedia.org/wiki/JavaScript">JavaScript (ES6+)</Link></li>
                <li><Link to="https://en.wikipedia.org/wiki/HTML">HTML5</Link></li>
                <li><Link to="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">CSS3</Link></li>
                <li><Link to="https://sass-lang.com/">SCSS</Link></li>
                <li><Link to="https://vuex.vuejs.org/">Vuex</Link></li>
                <li><Link to="https://en.wikipedia.org/wiki/Redux_(JavaScript_library)">Redux</Link></li>
                <li><Link to="https://tailwindcss.com/">Tailwind CSS</Link></li>
                <li><Link to="https://mui.com/">Material UI</Link></li>
                <li><Link to="https://vuetifyjs.com/">Vuetify</Link></li>
                <li><Link to="https://getbootstrap.com/">Bootstrap</Link></li>
                <li><Link to="https://vite.dev/">Vite</Link></li>
                <li><Link to="http://gulpjs.com/">Gulp</Link></li>
                <li><Link to="https://www.docker.com/">Docker</Link></li>
                <li><Link to="https://azure.microsoft.com/en-us/products/devops">Azure DevOps</Link></li>
                <li><Link to="https://github.com/features/actions">GitHub Actions</Link></li>
                <li><Link to="https://en.wikipedia.org/wiki/Representational_state_transfer">REST APIs</Link></li>
                <li><Link to="https://en.wikipedia.org/wiki/Node.js">Node.js</Link></li>
                <li><Link to="https://en.wikipedia.org/wiki/Git">Git</Link></li>
                <li><Link to="https://www.figma.com/">Figma</Link></li>
                <li><Link to="https://en.wikipedia.org/wiki/Scrum_(software_development)">Agile/Scrum</Link></li>
              </ul>
            </canvas>
          </div>
        </div>
      </div>
    </section>
  )
}
