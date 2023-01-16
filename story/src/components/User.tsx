import React, { useState, useEffect } from 'react'


interface Props {
  adventure: Adventure[]
  setAdventure: React.Dispatch<React.SetStateAction<Adventure[]>>
}

interface Adventure {
  id:number;
  health: number;
  attack:number;
  accuracy:number;
  weapons:number;
  items:number;
  villains:number;
}
const User: React.FC<Props> = ({adventure, setAdventure}) => {

  const card = require('./images/yugio.png')
  const cardk = require('./images/knight.png')


  return (
    <div className='User container-fluid'>
      <h2 className='stat-name'>Assassin</h2>
      <img className='yugi-card'  src={card} alt="" />
      <img className='knight-card' src={cardk} alt=""/>
      <h2 className='stat-h'>Health: {adventure[0].health}</h2>
      <h2 className='stat-a'>Attack: {adventure[0].attack}</h2>
    </div>
  )
}

export default User