import React, { useState, useEffect } from 'react'
import './App.css';

import Add from './components/Add'
import Edit from './components/Edit'
import Left from './components/Left';
import Middle from './components/Middle'
import Bottom from './components/Bottom'

import axios from 'axios'

const App: React.FC = () => {

  interface Adventure {
    id:number;
    health: number;
    attack:number;
    accuracy:number;
    weapons:number;
    items:number;
    villains:number;
  }


  const [page, setPage] = useState<boolean>(true);

  const [adventure, setAdventure] = useState<Adventure[]> ([])

  const [level,setLevel] = useState<number>(0)

  const[beginning, setBeginning] = useState<boolean>(true)
  const start = require('./components/images/loadingScreen.gif')

  ///////STATS////
  const [health, setHealth] = useState<number>(0)
  const [attack, setAttack] = useState<number>(0)
  const [accuracy, setAccuracy] = useState<number>(0)

  const [gold,setGold] = useState<number>(0)

  ///villains///

  const [villains, setVillains] = useState<[string,number,number][]>([["bob",10,15],["luke",10,14],['evil',10,20]])
  
  ////items///

  const[items,setItems] = useState<[string,number,number][]>([["Potion of Health",20,30],['smoke bombs',20,0],['Potion of Attack',30,20],['Big sword',50,30]])
  const[inventory, setInventory] = useState<[string,number][]>([["small blade",10],["food",10],["water",10],['magic',20]])
  


  const getAdventure = () => {
    axios.get('https://story-back-end.herokuapp.com/api/story')
    .then((response) => setAdventure(response.data),
      (err) => console.error(err))
    .catch((error) => console.error(error))
    }

    const handleCreate = (newAdv:Adventure): any =>  {
      axios.post("https://story-back-end.herokuapp.com/api/story", newAdv)
      .then((res) => {
        console.log(res.data)
        setAdventure(adventure.concat(res.data))
      })
    }

    const handleUpdate = (editAdventure: Adventure): any => {
      console.log(editAdventure)
      axios
        .put('https://story-back-end.herokuapp.com/api/story/' + editAdventure.id, editAdventure)
        .then((response) => {
          getAdventure()
        })
    }
    
    const handleDelete = (data: Adventure) => {
      axios.delete('https://story-back-end.herokuapp.com/api/story/' + data.id)
      .then((res) => {
        console.log(res.data)
        getAdventure()
      })
    }
  


  
useEffect(() => {
  getAdventure()
  setHealth(adventure.length ? adventure[0].health : 0)
  setAttack(adventure.length ? adventure[0].attack : 0)
  setAccuracy(adventure.length ? adventure[0].accuracy : 0)
}, [adventure])

    return (
      <div className="App container-fluid">
        {beginning ?
          <>
            <h1 className='start-game'onClick={() => setBeginning(false)}>Start Game</h1>
            <img className="start-screen" src={start} alt="" />


          </>
            :
          <div className='main container-fluid'>
            <Left adventure={adventure} setAdventure={setAdventure} health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy} gold={gold} setGold={setGold} villains={villains} setVillains={setVillains} items={items} setItems={setItems} inventory={inventory} setInventory={setInventory}/>
            <div className="right">
              <Middle setPage={setPage} page={page} health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy} gold={gold} setGold={setGold} villains={villains} setVillains={setVillains} items={items} setItems={setItems} level={level} setLevel={setLevel}/>
              <Bottom  health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy}/>
            </div>
          </div>
            }



        {/* <Add handleCreate = {handleCreate}/>
        {adventure.map((adv: Adventure, index: number) => (
          <div key={index}>
            <p>Health: {adv.health}</p>
            <p>Attack: {adv.attack}</p>
            <p>Accuracy: {adv.accuracy}</p>
            <p>Weapons: {adv.weapons}</p>
            <p>Items: {adv.items}</p>
            <p>Villains: {adv.villains}</p>
            <Edit handleUpdate={handleUpdate} getAdventure={getAdventure}  adventure={adventure} setAdventure={setAdventure} id={adventure[index].id} index={index}/>
            <button onClick={()=> handleDelete(adventure[index])}>Delete</button>
          </div>
        ))} */}
      </div>
    );
}

export default App;