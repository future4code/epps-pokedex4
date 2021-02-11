import React, { useState, useEffect, useContext } from 'react'
import Styled from './styled'
import { useHistory } from 'react-router-dom'
import GlobalStateContext from '../../Contexts/GlobalStateContext'
import { goToPage } from '../../Routes/Coordinator'

const PokemonList = () => {
  const { states, setters, requests } = useContext(GlobalStateContext)
  const history = useHistory()


  useEffect(() => {
    requests.getPokemons({})
    console.log(states.pokemonDetail)

  }, [])


  // const pokemonList = 
  //   states.pokemons &&
  //     states.pokemons.map((pokemon) => {

  //       return (
  //         <>
  //           <p>{requests.getPokemonDetail(pokemon.name)}</p>
  //           <p>{pokemon.name}</p>
  //         <img src={states.pokemonDetail} alt={pokemon.name} />
  //           <button onClick={() => { goToPage(history, "/details") }}>Details</button>
  //           <button>Add</button>
  //         </>
  //       )
  //     })

  // const pokemonList = requests.getPokemons()


  // const pokemonList =
  //   states.pokemonDetail &&
  //   states.pokemonDetail.map((pok) => {
  //     return(
  //       <>
  //       <p>{pok[0]}</p>
  //       <img src={pok[1]}/>
  //       </>

  //     )
  //   })


return (
  <>
  {/* {pokemonList} */}
  </>

);



}


export default PokemonList