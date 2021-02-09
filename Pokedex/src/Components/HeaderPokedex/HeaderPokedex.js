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
`

const BtnHome = styled.button`
    position: absolute;
    left: 10px;
`

const HeaderPokedex = () => {
    
    const history = useHistory()

    return(
        <MainContainer>
            
                <BtnHome onClick={() => goToPage(history, '/' )}>Ir para lista de Pokemons</BtnHome>
                       
                <h1>Pokedex</h1>
                                                                    
        </MainContainer>
    )
}


export default HeaderPokedex