import React from "react";
import {goToPage} from '../../Routes/Coordinator'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const MainContainer = styled.div`
    display:flex;
    width:100%;
    background-color:#EAF63E;
    align-items:center;
    color:#CA01F5;
    justify-content:center;
    text-align:center;
    font-family: 'Press Start 2P';
`

const BtnHome = styled.button`
    position: absolute;
    left: 10px;
`

const HeaderHome = () => {
    
    const history = useHistory()

    return(
        <MainContainer>
            
                <BtnHome onClick={() => goToPage(history, '/pokedex' )}>Ir para Pokedex</BtnHome>
                       
                <h1>Lista de Pokemons</h1>
                                                                    
        </MainContainer>
    )
}


export default HeaderHome