import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Constants/url'
import GlobalStateContext from '../Contexts/GlobalStateContext'

const GlobalState = (props) => {

    const [pokemons, setPokemons] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState([])
    const [myPokedex, setMyPokedex] = useState([])
    console.log("pokemonDetail", pokemonDetail)
    console.log("myPokedex", myPokedex)

    useEffect(() => {
        getPokemons()
        // console.log(states.pokemonDetail)
    }, [])

    const removeFromMyPokedex = (pokeInfo) => {
        const index = states.myPokedex.findIndex((i) => i.name === pokeInfo.name);
        let refreshMyPokedex = [...states.myPokedex]
        let newPokemonDetail = [...states.pokemonDetail]

        newPokemonDetail.push({ ...pokeInfo })
        setters.setPokemonDetail(newPokemonDetail)
        
        refreshMyPokedex.splice(index, 1);

        setters.setMyPokedex(refreshMyPokedex)
    }

    const addToMyPokedex = (pokeInfo) => {
        const index = states.pokemonDetail.findIndex((i) => i.name === pokeInfo.name);
        let refreshPokemonDetail = [...states.pokemonDetail]
        let newPokedex = [...states.myPokedex]

        newPokedex.push({ ...pokeInfo })
        setters.setMyPokedex(newPokedex)
        
        refreshPokemonDetail.splice(index, 1);


        setters.setPokemonDetail(refreshPokemonDetail)
    }

    const getPokemonDetail = (pokeName) => {

        axios
            .get(`${BASE_URL}${pokeName}/`)
            .then((res) => {
                // console.log(res)
                setPokemonDetail([pokeName, res.data.sprites.front_default])
                // console.log(pokemonDetail)


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
                let resDataLenght = res.data.results.length
                return (
                    res.data.results.map((poke) => {
                        axios
                            .get(`${BASE_URL}${poke.name}/`)
                            .then((res) => {

                                // console.log(poke.name)
                                // console.log(res.data)
                                info.push(res.data)
                                if (info.length === resDataLenght) {
                                    setPokemonDetail(info)
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

        console.log("info", info)

        // console.log("pokemonDetailFinal", pokemonDetail)

    }




    const states = { pokemons, pokemonDetail, myPokedex }
    const setters = { setPokemons, setPokemonDetail, setMyPokedex }
    const requests = { getPokemons, getPokemonDetail, addToMyPokedex, removeFromMyPokedex };

    const data = { states, setters, requests };

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState