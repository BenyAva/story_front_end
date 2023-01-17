import {useState} from 'react'

interface Props {
    setPage: React.Dispatch<React.SetStateAction<boolean>>
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

const Story: React.FC<Props> = ({ setPage,health,setAccuracy,setAttack,setHealth,attack,accuracy,gold,setGold,items,villains,level,setLevel}) => {

 
    const images:Record<number, any> = {
        0: require('./images/townStreet.jpeg'),
        1: require('./images/battle.gif'),
        2: require('./images/townStreet.jpeg')
    }
    const showPage = () => {
        setPage(false)
        console.log(setPage);
    }

    return(
        <div className="Story" style={{backgroundImage: `url(${images[level]})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: 'center', width: '100%', height: '100%'}}>
            {level === 0 ?
            <>
                <p>
                As the sun sets on the horizon, the assassin known as "The Shadow" arrives at a small medieval village. Weary from days of running, he seeks refuge in the local inn. But little does he know, the village is plagued by a group of ruthless bounty hunters, all with one mission: to capture or kill The Shadow.
                </p>
            </>
            :
            level === 1 ?
            <>
                <p>
                The Shadow has successfully evaded the bounty hunters in the village and has ventured deep into the forest. He must now navigate through the dense foliage and avoid the traps set by his pursuers.
                </p>
            </>
            :
            level === 2 ?
            <>
                <p>
                The Shadow has finally reached the castle where the leader of the bounty hunters resides. He must now infiltrate the castle and eliminate the leader to put an end to the pursuit once and for all.
                </p>
            </>
            :
            null}




            {/* <h1>Story</h1>
            <h2 className='stat-h'>Health: {health}</h2>
            <h2 className='stat-a'>Attack: {attack}</h2>
            <h2 className='stat-a'>Accuracy: {accuracy}</h2>
            <h2 className='stat-a'>Gold: {gold}</h2>
            <h2 className='stat-a'>Items: {items}</h2>
            <h2 className='stat-a'>Villains: {villains}</h2> */}
            <button onClick={() => showPage()}> Go To Store</button>
        </div>
    )
}
export default Story

