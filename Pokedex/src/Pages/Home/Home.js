import GlobalStateContext from '../../Contexts/GlobalStateContext'
import React, { useState, useEffect, useContext } from 'react'

function Home() {

  const { states, setters, requests } = useContext(GlobalStateContext)

  useEffect(()=>{
    requests.getPokemons()
  },[])
    
  /* const listPokemon = states.pokemons.map((pokemon)=>{ */
    return (
      <div>
        {/* name={pokemon.name}
        image={pokemon.photos[0]} */}
     </div>
     
   );
  /* }) */
    
  }
  
  export default Home;
  