import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/data'
import ItemProject from '../components/ItemProject'

export default function Detail() {
  const { id } = useParams()
  const itemFound = data.find((item) => item.id === id)

  useEffect(() => {
    if (itemFound) {
      document.title = `${itemFound.name} | NKT`
    }
  }, [itemFound])

  if (!itemFound) return null

  return (
    <section id="detail" className="detail">
      <ItemProject itemFound={itemFound} index={itemFound.id} />
    </section>
  )
}
