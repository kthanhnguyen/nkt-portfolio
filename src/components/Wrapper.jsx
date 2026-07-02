import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Loader from './Loader'

export default function PageWrapper({ component: Component }) {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)
  const timeoutRef = useRef(null)

  useEffect(() => {
    setIsLoading(true)
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timeoutRef.current)
  }, [location])

  return isLoading ? <Loader /> : <Component />
}
