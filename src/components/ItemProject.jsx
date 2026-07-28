import React from 'react'
import { AwesomeButton } from '@rcaferati/react-awesome-button'
import Slider from 'react-slick'

function NextArrow({ className, onClick }) {
  return <div className={className} onClick={onClick}><span></span></div>
}

function PrevArrow({ className, onClick }) {
  return <div className={className} onClick={onClick}><span></span></div>
}

function formatMonthYear(dateStr) {
  if (dateStr === 'present') return 'Present'
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

function getDurationMonths(start, end) {
  const s = new Date(start)
  const e = end === 'present' ? new Date() : new Date(end)
  return (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth()) + 1
}

export default function ItemProject({ itemFound }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <div className="detail">
      <div className="detail__name">{itemFound.name}</div>
      <div className="share">
        {itemFound.link !== '#' && (
          <AwesomeButton href={itemFound.link} containerProps={{ target: '_blank', rel: 'noopener noreferrer' }} className="btn-visit">
            <svg
              className="i-svg"
              height="50"
              version="1.1"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 50 50"
              xmlSpace="preserve"
            >
              <path
                d="M36.999,36.998H13V13.089L19,13V7h-12v35.998h35.998V27.999h-6V36.998z M25,7l6,6l-9,9l6,6l8.999-9l6,6V7H25z"
                fill="#ffffff"
              ></path>
            </svg>
            VISITS THIS WEBSITE
          </AwesomeButton>
        )}
      </div>
      {itemFound.listImgs?.length === 1 && (
        <div className="slide">
          <div
            className="slide-item"
            style={{ backgroundImage: `url(/project/${itemFound.id}/${itemFound.listImgs[0]}.png)` }}
          ></div>
        </div>
      )}
      {itemFound.listImgs?.length > 1 && (
        <div className="slide">
        <Slider {...settings}>
          {itemFound.listImgs.map((img, index) => (
            <div key={index}>
              <div
                className="slide-item"
                style={{ backgroundImage: `url(/project/${itemFound.id}/${img}.png)` }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>
      )}
      

      {itemFound.type && <div className="section_info">
        <h2>Type</h2>
        <hr />
        <p>{itemFound.type}</p>
      </div>}
      
      <div className="section_info">
        <h2>About this project</h2>
        <hr />
        <p>{itemFound.about[0]}</p>
        <p>{itemFound.about[1]}</p>
      </div>
      <div className="section_info">
        <h2>Project Info</h2>
        <hr />
        <p><strong>Role:</strong> {itemFound.role}</p>
        <p>
          <strong>Duration:</strong>{' '}
          {formatMonthYear(itemFound.startDate)} – {formatMonthYear(itemFound.endDate)}{' '}
          ({getDurationMonths(itemFound.startDate, itemFound.endDate)} months)
        </p>
        <p><strong>Team:</strong></p>
        <ul className="keywords">
          {itemFound.team.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
      <div className="section_info">
        <h2>Responsibilities</h2>
        <hr />
        <ul className="keywords">
          {itemFound.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
      <div className="section_info">
        <h2>Tech Stack</h2>
        <p><em>Code technologies I got involved while working on this project</em></p>
        <hr />
        <ul className="keywords">
          {itemFound.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
