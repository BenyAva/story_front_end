import React, { useState, useEffect } from 'react'
import User from './User'
import Info from './Info'
import Inventory from './Inventory'

interface Props {
  adventure: Adventure[]
  setAdventure: React.Dispatch<React.SetStateAction<Adventure[]>>
  health: number
  setHealth:React.Dispatch<React.SetStateAction<number>>
  attack: number
  setAttack :React.Dispatch<React.SetStateAction<number>>
  accuracy: number
  setAccuracy: React.Dispatch<React.SetStateAction<number>>
  gold: number
  setGold: React.Dispatch<React.SetStateAction<number>>
  villains: [string, number, number][]
  setVillains: React.Dispatch<React.SetStateAction<[string, number, number][]>>
  items: [string, number, number][]
  setItems: React.Dispatch<React.SetStateAction<[string, number, number][]>>
  inventory: [string,number][]
  setInventory: React.Dispatch<React.SetStateAction<[string, number][]>>
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
const Left: React.FC<Props> = ({adventure, setAdventure,setHealth,setAccuracy,setAttack,health,attack,accuracy,gold,setGold,setItems,items,inventory,setInventory,villains,setVillains}) => {
  return (
    <div className='Left container-fluid'>
      <User adventure={adventure} setAdventure={setAdventure} health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy}/>
      <Info />
      <Inventory gold={gold} setGold={setGold} villains={villains} setVillains={setVillains} items={items} setItems={setItems} inventory={inventory} setInventory={setInventory}/>
      
    </div>
  )
}

export default Left

