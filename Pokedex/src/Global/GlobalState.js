import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Constants/url'
import GlobalStateContext from '../Contexts/GlobalStateContext'

const GlobalState = (props) =>{

    const [pokemons, setPokemons] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState("")
   
    const getPokemonDetail = (pokeName) =>{

        axios
        .get(`${BASE_URL}${pokeName}/`)
        .then((res)=>{
            console.log(res)
            setPokemonDetail(res.data.sprites.front_default)   
            // console.log(res.data.sprites)
                     
        })
        .catch((err)=>{
            console.log(err)
        })
        console.log(pokemonDetail)
    }
    

    const getPokemons = () =>{
        axios
        .get(`${BASE_URL}`)
        .then((res)=>{
            console.log(res.data.results)
            setPokemons(res.data.results)

        })
        .catch((err)=>{
            console.log(err)
        })
    }

    

  
    
    const states = {pokemons, pokemonDetail}
    const setters ={setPokemons, setPokemonDetail}
    const requests = {getPokemons, getPokemonDetail };

    const data = {states, setters, requests };

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState