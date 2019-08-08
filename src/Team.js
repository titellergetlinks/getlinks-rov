import React from 'react'
import './Team.css'

function Team({ name, players }) {
  return (
    <div className="Team">
      <div className="Team-name">{name}</div>
      <div className="Team-players">
        {players.map(({ name, nickname, team }) => <div key={nickname}>{`${name} - ${nickname} (${team})`}</div>)}
      </div>
    </div>
  )
}

export default Team
