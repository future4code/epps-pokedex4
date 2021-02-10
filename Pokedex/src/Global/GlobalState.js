import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Constants/url'
import GlobalStateContext from '../Contexts/GlobalStateContext'

const GlobalState = (props) =>{

    const [pokemons, setPokemons] = useState([])
    

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
    const requests = { getPokemons };
    
    const states = {pokemons}
    const setters ={setPokemons}

    const data = {states, setters, requests };

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState