interface AchievementsProps {
    conq: [];
  }

import React from 'react'

import "./style.css"

const Achievements = ({conq}: AchievementsProps) => {
  return (
    <div className='card-achievements'>
        <div className="achievements">
            <img src={conq.image} alt={conq.name} />
            <h3>{conq.name}</h3>
            <p>{conq.description}</p>
            <span>Chance de {conq.percent}%</span>
        </div>
    </div>
  )
}

export default Achievements