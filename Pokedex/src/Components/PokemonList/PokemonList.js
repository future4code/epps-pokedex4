import React, { useState, useEffect, useContext } from 'react'
import Styled from './styled'
import { useHistory } from 'react-router-dom'
import GlobalStateContext from '../../Contexts/GlobalStateContext'
import { goToPage } from '../../Routes/Coordinator'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    marginTop: 20,
    alignItems:"center",
    justifyContent: "center",

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    
  },
  title: {
    fontSize: 20,    
  },
  body: {
    marginTop: 12,
    marginBottom: 12,    
  },
});

const PokemonList = () => {
  const { states, setters, requests } = useContext(GlobalStateContext)
  const classes = useStyles();
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
    <Grid container spacing={4} justify="center">
      { states.pokemonDetail &&
        states.pokemonDetail.map((pokemon) => {
          console.log("dentro do map", pokemon)
          return (
            <Grid item>
              <Card className={classes.root}>
                <CardContent className={classes.root}>
                  <Typography className={classes.title}>{pokemon.name}</Typography >
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <br/>                  
                  <Button variant="contained" onClick={() => { goToPage(history, "/details") }}>Details</Button>
                  <Button variant="contained">Add</Button>
                </CardContent>
              </Card>
            </Grid>
          )
        })
      }
    </Grid>

  );



}


export default PokemonList