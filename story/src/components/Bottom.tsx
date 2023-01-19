import React, { useState, useEffect } from 'react'
interface Props {
  setPage: React.Dispatch<React.SetStateAction<boolean>>
  page: boolean
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
  level: number
  setLevel: React.Dispatch<React.SetStateAction<number>>
  choice: number
  setChoice: React.Dispatch<React.SetStateAction<number>>
  inventory: [string, number][]
  setInventory: React.Dispatch<React.SetStateAction<[string, number][]>>
  handleBattle: () => any
}
const Bottom: React.FC<Props> = ({ setPage, page,health,setAccuracy,setAttack,setHealth,attack,accuracy,gold,setGold,villains,setVillains,items,setItems,level,setLevel,choice,setChoice,inventory,setInventory,handleBattle}) => {

    const [delayed, setDelayed] = useState(false)
    
      const showPage = () => {
        setPage(false)
        console.log(setPage);
    }
    const showStory = () => {
      setPage(true)
      console.log(setPage);
    }

    const makeChoice : any = (number: number) => {
      console.log(number)
      setChoice(number)
      console.log(choice)
    }

    
    const currentLevel: any = (number: number) => {
      setLevel(number)
    }
    
    const storyResult = () => {
      if (level === 1 && choice === 1){
        setAttack(attack - 2)
        console.log(attack)
      }else if (level === 1 && choice === 2){
        setAttack(attack + 5)
        setHealth(health + 10)
        setGold(gold + 10)
      }
    }

    const handleRemove = () => {
        let newVillains = villains
        newVillains.shift()
        setVillains(newVillains)
    }
    useEffect(()=> {
      if(delayed) {
        setTimeout(() => storyResult(), 1000)
      }
    },[delayed])

  return (
    <div className='Bottom'>
      {level === 0 ?
        <button onClick={() => {currentLevel(1)}}>Begin Quest</button>
      
      :null}

      {level === 1 && choice === 0 ?
      <>
        <button onClick={() => {setChoice(1); setDelayed(true)}}>Choice One</button>
        <button onClick={() => {makeChoice(2); setDelayed(true)}}>Choice Two</button>
      
      </>
      :null}

      {level === 1?
        <button onClick={() => {currentLevel(2); setChoice(0)}}>Next</button>
      
      :null}


      {level === 2 && choice === 0 ?
      <>
        <button onClick={() => {setChoice(1); setDelayed(true)}}>Choice One</button>
        <button onClick={() => {makeChoice(2); setDelayed(true)}}>Choice Two</button>
      
      </>
      :null}

      {level === 2?
        <button onClick={() => {currentLevel(3); setChoice(0)}}>Next</button>
      
      :null}

      {level === 3?
            <button onClick={() => {handleBattle(); currentLevel(4)}}> Battle</button>
        :null}
      {level === 4?
        <button onClick={() => {currentLevel(5); setChoice(0); handleRemove()}}>Next</button>
      
      :null}

      {level === 5 && choice === 0 ?
      <>
        <button onClick={() => {setChoice(1); setDelayed(true)}}>Choice One</button>
        <button onClick={() => {makeChoice(2); setDelayed(true)}}>Choice Two</button>
      
      </>
      :null}

      {level === 5?
        <button onClick={() => {currentLevel(6); setChoice(0)}}>Next</button>
      
      :null}

      {level === 6?
            <button onClick={() => {handleBattle(); currentLevel(7)}}> Battle</button>
        :null}
      {level === 7? 
        <button onClick={() => {currentLevel(8); setChoice(0)}}>The End</button>
        
      :null}

        {/* <button onClick={() => showStory()}> Go To Story</button>
        <button onClick={() => showPage()}> Go To Store</button> */}
    </div>
  )
}

export default Bottom