import {useState} from 'react'
import Story from './Story'
import Store from './Store'


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


}


const Middle: React.FC<Props> = ({ setPage, page,health,setAccuracy,setAttack,setHealth,attack,accuracy,gold,setGold,villains,setVillains,items,setItems,level,setLevel}) => {

return(
    <div className="Middle">
      {/* <h1>Middle</h1> */}
        { page ? <Story setPage={setPage} health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy} gold={gold} setGold={setGold} villains={villains} setVillains={setVillains} items={items} setItems={setItems} level={level} setLevel={setLevel} /> : <Store setPage={setPage}/>}
    
    </div>
)
}
export default Middle
