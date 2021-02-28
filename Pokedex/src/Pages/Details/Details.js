
import React, { useState, useEffect, useContext } from 'react'
import GlobalStateContext from '../../Contexts/GlobalStateContext'
import { useHistory } from 'react-router-dom'

import { FooterMoves, PokeTypesBox, AllMoves, BoxStatus, Title, GridLayout, PokeName, PokeImages, PokeStats, PokeTypes, PokeMoves } from './styled.js'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


function Details() {
  const history = useHistory()
  const { states, setters, requests } = useContext(GlobalStateContext)

  return (


    <GridLayout>
      <PokeName>{states.pokemonPageDetail.name}</PokeName>
    
      <PokeImages>
        <Title>Sprites</Title>

        <div>Default</div>
        <img src={states.pokemonPageDetail.sprites.front_default} />
        <img src={states.pokemonPageDetail.sprites.back_default} />
        <div>Shiny</div>
        <img src={states.pokemonPageDetail.sprites.front_shiny} />
        <img src={states.pokemonPageDetail.sprites.back_shiny} />
      </PokeImages>
      

      <PokeStats>
        <Title>Stats</Title>
        {
          states.pokemonPageDetail &&
          states.pokemonPageDetail.stats.map((pok) => {
            return (
              <BoxStatus>
                <p>{pok.stat.name}:</p>
                <p>{pok.base_stat}</p>
              </BoxStatus>
            )
          })
        }
      </PokeStats>

      <PokeTypes>
        <Title>Types</Title>
        <PokeTypesBox>
          {
            states.pokemonPageDetail &&
            states.pokemonPageDetail.types.map((pok) => {
              return (
                <p>
                  {pok.type.name}
                </p>
              )
            })
          }
        </PokeTypesBox>
      </PokeTypes>


      <PokeMoves >
        <Title>Moves</Title>
        <AllMoves>
          <ul>

            {states.pokemonPageDetail &&
              states.pokemonPageDetail.moves.map((pok) => {
                return (
                  <li>
                    {pok.move.name}
                  </li>
                )
              })
            }

          </ul>
        </AllMoves>
        

      </PokeMoves>
    </GridLayout>

  );
}

export default Details;
