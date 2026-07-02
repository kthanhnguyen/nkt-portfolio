import React from 'react'
import { data } from '../data/data'
import ItemProject from './ItemProject'

export default function Modal({ id, active, closeModal, mOut, closeMaskModal }) {
  const itemFound = data.find((item) => item.id === id)

  return (
    <div className={`modal ${active ? 'active' : ''}${mOut && !active ? 'out' : ''}`}>
      <div className="modal-background" onClick={closeMaskModal}></div>
      <div className="modal-wrapper">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <ItemProject itemFound={itemFound} index={itemFound.id} />
        </div>
      </div>
    </div>
  )
}
