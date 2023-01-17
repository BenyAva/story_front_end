import React, { useState, useEffect } from 'react'

interface Props {
  gold: number
  setGold: React.Dispatch<React.SetStateAction<number>>
  villains: [string, number, number][]
  setVillains: React.Dispatch<React.SetStateAction<[string, number, number][]>>
  items: [string, number, number][]
  setItems: React.Dispatch<React.SetStateAction<[string, number, number][]>>
  inventory: [string,number][]
  setInventory: React.Dispatch<React.SetStateAction<[string, number][]>>
}

const Inventory: React.FC<Props> = ({gold,setGold,setItems,items,inventory,setInventory}) => {

  return (
    <div className='Inventory'>
            <h2 className='stat-a'>Gold: {gold}</h2>
            <h2 className='stat-a'>Items:{items}</h2>
            <h2 className='stat-a'>Inventory: {inventory}</h2>
    </div>
  )
}

export default Inventory