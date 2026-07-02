import React, { useEffect } from 'react'
import MainVisual from '../components/MainVisual'

export default function Home() {
  useEffect(() => {
    document.title = 'Home | NKT'
  }, [])

  return <MainVisual />
}
