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

  const one = require('./images/bounty1.png')
  const two = require('./images/bounty2.png')
  const three = require('./images/bounty3.png')

  return (
    <div className='Inventory container-fluid'>
        <div className='bounty-h container' >

          <img className='hunter' src={one} alt="" />
          <img className='hunter' src={two} alt="" />
          <img className='hunter' src={three} alt="" />

        </div>



      
    </div>
  )
}

export default Inventory