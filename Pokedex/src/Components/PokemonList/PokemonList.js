import React, { useState, useEffect, useContext } from 'react'
import Styled from './styled'
import { useHistory } from 'react-router-dom'
import GlobalStateContext from '../../Contexts/GlobalStateContext'
import { goToPage } from '../../Routes/Coordinator'

const PokemonList = () => {
  const { states, setters, requests } = useContext(GlobalStateContext)
  const history = useHistory()


  

  console.log("pokemonDetailNoComponente", states.pokemonDetail)
  console.log("length", states.pokemonDetail.length)


  const pokemonList =
    // console.log("Dentro do Componente",states.pokemonDetail)

    states.pokemonDetail.map((pokemon) => {
      console.log("dentro do map", pokemon)
      return (
        <>
          <p>{pokemon.name}</p>

          {/* <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <button onClick={() => { goToPage(history, "/details") }}>Details</button>
            <button>Add</button> */}

        </>
      )

    })
  // console.log("pokepoke",pokepoke)


  // const pokemonList = requests.getPokemons()


  // let pokemonList =
  //   states.pokemonDetail &&
  //   states.pokemonDetail.map((pok) => {
  //     console.log(pok)
  //     return (
  //       <>
  //         <p>{pok.name}</p>
  //         <img src={pok.sprites.front_default} alt={pok.name} />

  //       </>

  //     )
  //   })


  return (
    <>
      { states.pokemonDetail &&
        states.pokemonDetail.map((pokemon) => {
          console.log("dentro do map", pokemon)
          return (
            <>
              <p>{pokemon.name}</p>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <button onClick={() => { goToPage(history, "/details") }}>Details</button>
              <button>Add</button>
            </>
          )
        })
      }
    </>

  );



}


export default PokemonList