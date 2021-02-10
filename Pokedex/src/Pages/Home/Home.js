import React, { useState, useEffect, useContext } from 'react'
import GlobalStateContext from '../../Contexts/GlobalStateContext'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL} from '../../Constants/url'


const Home = () =>{
  const { states, setters, requests } = useContext(GlobalStateContext)
  const history = useHistory()
  const [pokemon, setPokemon] = useState('')


  useEffect(()=>{
    requests.getPokemons()
    
  }, [])

  

const pokemonList = 
states.pokemons && 
states.pokemons.map((pokemon)=>{
  
    return(
      <div>
        <p>{pokemon.name}</p>
        <div>
          
        </div>
               
      </div>
      
    )
  })


  return (
    <div>
      {pokemonList}
   </div>
   
 );
}


  export default Home;
  