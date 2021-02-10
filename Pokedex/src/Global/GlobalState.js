import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Constants/url'
import GlobalStateContext from '../Contexts/GlobalStateContext'

const GlobalState = (props) =>{

    const [pokemons, setPokemons] = useState([])
    const [imgPokemon, setImgPokemon]= useState('')
    

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

  
    
    const states = {pokemons, imgPokemon}
    const setters ={setPokemons, setImgPokemon}
    const requests = { getPokemons };

    const data = {states, setters, requests };

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState