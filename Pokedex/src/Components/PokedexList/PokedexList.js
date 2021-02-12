import React, { useState, useEffect, useContext } from 'react'

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
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
        flexDirection:'column',

        minWidth: 275,
        maxWidth: 300,
        marginTop: 20,


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

const PokedexList = () => {
    const { states, setters, requests } = useContext(GlobalStateContext)
    const classes = useStyles();
    const history = useHistory()





    console.log("pokemonDetailNoComponente", states.pokemonDetail)
    console.log("length", states.pokemonDetail.length)





    return (
        <Grid container spacing={4} justify="center">
            { states.myPokedex &&
                states.myPokedex.map((pokemon) => {
                    console.log("dentro do map", pokemon)

                    return (
                        <Grid item  >
                            <Card className={classes.root} >
                                <CardContent className={classes.root} >
                                    <Typography className={classes.title}>{pokemon.name}</Typography >
                                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                    <br />
                                    <div>
                                    <Button variant="contained" onClick={() => { goToPage(history, "/details") }}>Details</Button>
                                    <Button variant="contained" onClick={() => { requests.removeFromMyPokedex(pokemon) }}>Remove</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>

    );



}


export default PokedexList