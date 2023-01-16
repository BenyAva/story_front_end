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
    }, [])

    return (
      <div className="App container-fluid">

        <div className='main container-fluid'>
          <Left adventure={adventure} setAdventure={setAdventure}/>
          <div className="right">
            <Middle setPage={setPage} page={page} />
            <Bottom />
          </div>
        </div>




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