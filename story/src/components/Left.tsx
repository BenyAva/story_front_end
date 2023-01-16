import React, { useState, useEffect } from 'react'
import User from './User'
import Info from './Info'
import Inventory from './Inventory'

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
const Left: React.FC<Props> = ({adventure, setAdventure}) => {
  return (
    <div className='Left container-fluid'>
      <User adventure={adventure} setAdventure={setAdventure}/>
      <Info/>
      <Inventory/>
      
    </div>
  )
}

export default Left

