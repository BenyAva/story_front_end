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

  const [setting, setSetting] = useState<boolean>(false)
  const [page, setPage] = useState<boolean>(true);

  const [adventure, setAdventure] = useState<Adventure[]> ([])

  const [level,setLevel] = useState<number>(0)

  const[beginning, setBeginning] = useState<boolean>(true)
  const[choice,setChoice] = useState<number>(0)
  const start = require('./components/images/loadingScreen.gif')
  ///////STATS////
  const [health, setHealth] = useState<number>(0)
  const [attack, setAttack] = useState<number>(0)
  const [accuracy, setAccuracy] = useState<number>(0)

  const [gold,setGold] = useState<number>(0)

  ///villains///

  const [villains, setVillains] = useState<[string,number,number][]>([["bob",10,15],["luke",80,60],['evil',10,20]])
  
  ////items///

  const[items,setItems] = useState<[string,number,number][]>([["Potion of Health",0,30],['smoke bombs',20,0],['Potion of Attack',30,20],['Big sword',50,30]])
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
    const handleBattle = (): any => {
      const villain = villains[0];
      let villainHealth = villain[1];
      const villainAttack = villain[2];
      
      // Simulating battle calculations
      while (villainHealth > 0 && health > 0) {
        if (Math.random() < accuracy) {
          villainHealth -= attack;
        }
        setHealth(health- villainAttack);
      }
      
      // Updating villain's health in state
      setVillains((prevVillains) => {
        const newVillains = [...prevVillains];
        newVillains[0] = [villain[0], villainHealth, villainAttack];
        return newVillains;
      });
      
      
      
      // Check if user won the battle
    //   if (health > 0) {
    //     // User won the battle, give them a "Potion of Health" item
    //     const potionIndex = items.findIndex((item) => item[0] === "Potion of Health");
    //     if (potionIndex !== -1) {
    //       setItems((prevItems) => {
    //         const newItems = [...prevItems];
    //         newItems.splice(potionIndex, 1);
    //         return newItems;
    //       });
    //       setHealth(health + items[potionIndex][1]);
    //     }
    //   }
     }

     

  
useEffect(() => {
  getAdventure()
}, [])

    return (
      <div className="App container-fluid">
        {beginning ?
          <>
            <h1 className='start-game'onClick={() => {setBeginning(false); setHealth(adventure[0].health); setAttack(adventure[0].attack); setAccuracy(adventure[0].accuracy)}}>Start Game</h1>
            <img className="start-screen" src={start} alt="" />


          </>
          :
            !beginning && setting === false  ?
          <div className='main container-fluid'>

            <Left adventure={adventure} setAdventure={setAdventure} health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy} gold={gold} setGold={setGold} villains={villains} setVillains={setVillains} items={items} setItems={setItems} inventory={inventory} setInventory={setInventory} level={level} setLevel={setLevel} setting={setting} setSetting={setSetting}/>

            <div className="right">

              <Middle setPage={setPage} page={page} health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy} gold={gold} setGold={setGold} villains={villains} setVillains={setVillains} items={items} setItems={setItems} level={level} setLevel={setLevel} choice={choice} setChoice={setChoice} handleBattle={handleBattle}/>

              <Bottom setPage={setPage} page={page} health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy} gold={gold} setGold={setGold} villains={villains} setVillains={setVillains} items={items} setItems={setItems} level={level} setLevel={setLevel} choice={choice} setChoice={setChoice} inventory={inventory} setInventory={setInventory} handleBattle={handleBattle}/>

            </div>
          </div>
            :
          setting === true ? 
            <div className='settings-add'>
                {/* <Add handleCreate = {handleCreate}/> */}
              {adventure.map((adv: Adventure, index: number) => (
                <div key={index}>
                  <p>Health: {adv.health}</p>
                  <p>Attack: {adv.attack}</p>
                  <p>Accuracy: {adv.accuracy}</p>
                  <p>Weapons: {adv.weapons}</p>
                  <p>Items: {adv.items}</p>
                  <p>Villains: {adv.villains}</p>
                  <Edit handleUpdate={handleUpdate} getAdventure={getAdventure}  adventure={adventure} setAdventure={setAdventure} id={adventure[index].id} index={index}/>
                  {/* <button onClick={()=> handleDelete(adventure[index])}>Delete</button> */}
                  <button onClick={() => {setSetting(false)}}>exit</button>
                </div>
              ))}
            </div>
          
          :null}




            

        
      </div>
    );
}

export default App;