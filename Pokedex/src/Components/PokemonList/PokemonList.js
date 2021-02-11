import React, { useState, useEffect, useContext } from 'react'
import Styled from './styled'
import { useHistory } from 'react-router-dom'
import GlobalStateContext from '../../Contexts/GlobalStateContext'
import {goToPage} from '../../Routes/Coordinator'

const PokemonList = (props) =>{
    const { states, setters, requests } = useContext(GlobalStateContext)
    const history = useHistory()
  
  
  
    useEffect(()=>{
      requests.getPokemons()
      
    }, [])
  
    
  
  const pokemonList = 
  states.pokemons && 
  states.pokemons.map((pokemon)=>{
    
      return(        
          <>
          <p>{requests.getPokemonDetail(pokemon.name)}</p>
          <p>{pokemon.name}</p>
          <img src={states.pokemonDetail} alt={pokemon.name}/>
          <button onClick={()=>{goToPage(history, "/details")}}>Details</button>
          <button>Add</button>
          </>  
      )
    })
  
  
    return (
      <>
        {pokemonList}
     </>
     
   );


  
}


export default PokemonList