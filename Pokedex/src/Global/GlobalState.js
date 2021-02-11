import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Constants/url'
import GlobalStateContext from '../Contexts/GlobalStateContext'

const GlobalState = (props) => {

    const [pokemons, setPokemons] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState([])


    const getPokemonDetail = (pokeName) => {

        axios
            .get(`${BASE_URL}${pokeName}/`)
            .then((res) => {
                // console.log(res)
                setPokemonDetail([pokeName, res.data.sprites.front_default])
                console.log(pokemonDetail)


            })
            .catch((err) => {
                console.log(err)
            })
        console.log(pokemonDetail)
    }


    const getPokemons = () => {
        let info = []
        axios
            .get(`${BASE_URL}`)
            .then((res) => {
                // console.log(res.data.results.name)
                return (
                    res.data.results.map((poke) => {
                        axios
                            .get(`${BASE_URL}${poke.name}/`)
                            .then((res) => {

                                console.log(poke.name)
                                console.log(res.data)
                                info.push([res.data])

                                if(info.length === 20){
                                    setPokemonDetail(info)
                                    console.log(pokemonDetail)
                                }
                                

                            })
                            .catch((err) => {
                                console.log(err)
                            })


                    })
                    
                )
                
            })

            .catch((err) => {
                console.log(err)
            })

            console.log(info)
            
            

    }


    const states = { pokemons, pokemonDetail }
    const setters = { setPokemons, setPokemonDetail }
    const requests = { getPokemons, getPokemonDetail };

    const data = { states, setters, requests };

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState