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
    choice: number
    setChoice: React.Dispatch<React.SetStateAction<number>>
    handleBattle: () => any
}

const Story: React.FC<Props> = ({ setPage,health,setAccuracy,setAttack,setHealth,attack,accuracy,gold,setGold,items,villains,level,setLevel,choice,setChoice,handleBattle}) => {

 
    const images:Record<number, any> = {
        0: require('./images/townStreet.jpeg'),
        1: require('./images/battle.gif'),
        2: require('./images/townStreet.jpeg'),
        3: require('./images/dual.gif'),
        4: require('./images/dualEnding.gif'),
        5: require('./images/town.jpeg'),
        6: require('./images/dual.gif'),
        7: require('./images/dualEnding.gif'),
        8: require('./images/sunset.gif')

    }


    return(
        <div className="Story" style={{backgroundImage: `url(${images[level]})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: 'center', width: '100%', height: '100%'}}>
            {level === 0 ?
            <>
                <p className='.typing-text'>
                As the sun sets on the horizon, the assassin known as "The Shadow" arrives at a small medieval village. Weary from days of running, he seeks refuge in the local inn. But little does he know, the village is plagued by a group of ruthless bounty hunters, all with one mission: to capture or kill The Shadow.
                </p>
            </>
            :
            level === 1 && choice === 0 ?
            <>
                <p className='.typing-text'>
                As he sits down to rest and plan his next move, The Shadow can't help but think of the many close calls he's had with the hunters. He knows they're not far behind and he must make a decision: keep running or develop a tactic to eliminate the hunters once and for all.

                The Shadow must now weigh his options, and the fate of his life rests in the choices he makes. Will he choose to keep running, or will he stand and fight? The decision is yours.
                </p>
            </>
            :
            level === 1 && choice === 1 ?
            <>
                <p className='.typing-text'>
                The Shadow has successfully evaded the bounty hunters in the village and has ventured deep into the forest. He must now navigate through the dense foliage and avoid the traps set by his pursuers. However Shadow had made one mistake. He was spotted by locals heading into the forest.
                </p>
            </>
            :
            level === 1 && choice === 2 ?
            <>
                <p className='.typing-text'>
                Shadow knows he can't keep running forever. He needs to eliminate the hunters once and for all. He begins to gather information on the hunters, studying their strengths and weaknesses. He finds out that they are well-equipped and trained in combat, but they are not very good at tracking. He decides to use this to his advantage.
                </p>
            </>
            :
            level === 2 && choice === 0 ? 
            <>  
                <p className='.typing-text'>
                Shadow knows he can't keep running forever. He needs to eliminate the hunters once and for all. He begins to gather information on the hunters, studying their strengths and weaknesses. He finds out that they are well-equipped and trained in combat, but they are not very good at tracking.He can use this to his advantage.

                Do you run away or do you study their movements and track them down?
                </p>
            
            </>
            :
            level ===2 && choice === 1 ?
            <>
                <p className='.typing-text'>
                The Shadow tries to escape, but the Hunter follows him. A chase ensues through the streets of the small town, but The Shadow manages to lose him just to be confronted with another hunter.

                You come face to face with the hunter and now you must fight.

                </p>
            
            </>
            :level === 2 && choice === 2 ?
            <>
                <p className='.typing-text'>
                The Shadow starts to gather information about The Hunter, studying his habits and weaknesses. He finds out that The Hunter is a loner, and that he always works alone. The Shadow decides to use this to his advantage and starts to set traps and ambushes to capture or kill the Hunter, but the Hunter is not easily fooled and starts to counter his moves.

                You come face to face with the hunter and now you must fight.
                </p>
            
            </>
            :
            level === 3 && choice === 0 ?
            <>
                <h1>FIGHT</h1>
            </>
            :
            level === 4 && choice === 0 ?
            <>
                <p className='.typing-text'>
                The Shadow engaged in battle with the bounty hunters. 
                </p>
                {health <= 0 ? <p> Unfortunately, The Shadow was defeated. </p> : <p> The Shadow emerged victorious, having defeated the bounty hunters. </p>}
                <p> 
                     <ul>
                    Final Health: {health} 
                    </ul> 
                    <ul>Final Attack: {attack} </ul>
                    <ul>
                    Final Accuracy: {accuracy}
                    </ul>
                 </p>
            </>
            :
            level === 5 && choice === 0 ?
            <>
                <p className='.typing-text'>
                The Shadow, after successfully eliminating the other hunters and settling into a new life, starts to feel like he's finally safe. However, he soon discovers that there's a new hunter on his trail. This hunter, known as "Banshee" is a skilled and ruthless assassin who has been hired to capture or kill Shadow.

                Now that Shadow has defeated one of the Hunters he needs to find shelter fast and lay low. He thinks to himself. He can either continue to and hunt Banshee down or he can go take a break at a inn.

                Do you rest or pursue the hunters?

                </p>
            </>
            :
            level === 5 && choice === 1 ?
            <>
                <p className='.typing-text'>

                Shadow decides to take a rest at an inn. As he eats his meal, he starts to think about his situation. He knows that the Hunter is not going to stop until he catches him. He also knows that he's not in the best shape to keep running. He decides to take a break, to rest and heal his wounds. He knows that he needs to be careful, but he also knows that he needs to be smart.

                However he didnt expect the hunter to be staying there as well. 

                </p>
            </>
            :
            level === 5 && choice === 2 ?
            <>
                <p className='.typing-text'>

                Finally, he spots the Hunter's camp, and he knows that this is his chance. He carefully approaches the camp, his weapons at the ready. The Hunter is sitting by the fire, his back to The Shadow. The Shadow takes a deep breath, and with one swift move, he strikes.

                </p>
            </>
            :
            level === 6 && choice === 0 ?
            <>
                <p className='.typing-text'>
                The Hunter is surprised but he's also ready for a fight. They engage in a fierce battle, using all their skills and weapons. The Shadow takes advantage of his knowledge of the environment, using the terrain and the objects around him to his advantage. 
                </p>
            </>
            :
            level === 7 && choice === 0 ?
            <>
                <p className='.typing-text'>
                The Shadow engaged in battle with the bounty hunters. 
                </p>

                {health <= 0 ? <p className='.typing-text'> Unfortunately, The Shadow was defeated. </p> : <p className='.typing-text'> The Shadow emerged victorious, having defeated the bounty hunter. The Shadow decides to spare his life and take the day off and flee to a new town. The end. </p>}

                <p> 
                     <ul>
                    Final Health: {health} 
                    </ul> 
                    <ul>Final Attack: {attack} </ul>
                    <ul>
                    Final Accuracy: {accuracy}
                    </ul>
                 </p>
            </>
            :
            level == 8 ?
            <>
                <p className='.typing-text'>THE END</p>
            
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

        </div>
    )
}
export default Story

