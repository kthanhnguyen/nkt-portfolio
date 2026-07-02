import React from 'react'
import { createRoot } from 'react-dom/client'
import { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { loadImageShape } from '@tsparticles/shape-image'
import '@rcaferati/react-awesome-button/styles.css'
import './styles/main.scss'
import App from './App'

async function initParticles(engine) {
  await loadSlim(engine)
  await loadImageShape(engine)
}

const root = createRoot(document.getElementById('root'))
root.render(
  <ParticlesProvider init={initParticles}>
    <App />
  </ParticlesProvider>
)
