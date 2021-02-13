import styled from 'styled-components'

export const GridLayout = styled.div`
font-family: "Press Start 2P";
height: 87.6vh;
display: grid;
grid-template-areas:
  "PokeName PokeName PokeName"
  "PokeImages PokeStats PokeTypes"
  "PokeImages PokeStats PokeMoves"
  "PokeImages PokeStats PokeMoves"
  "PokeImages PokeStats PokeMoves"
  "PokeImages PokeStats PokeMoves";
grid-template-rows: 1fr 2fr 2fr 2fr 2fr 2fr;
grid-template-columns: 1fr 2fr 2fr;
grid-gap: 5vh;
`;

export const PokeName = styled.div`
grid-area:PokeName;
display:flex;

align-items: center;
justify-content:center;
font-size: 60px;
margin-top: 4vh;
text-transform: capitalize;
`

export const Title = styled.div`
display:flex;
align-items: center;
justify-content:center;
font-size: 40px;
margin:4vh;

`

export const PokeImages = styled.div`
grid-area:PokeImages;
display:flex;
align-items: center;
justify-content:center;
flex-direction: column;



`
export const PokeStats = styled.div`
grid-area:PokeStats;
display:flex;
flex-direction: column;
/* background-color:purple;   */
`
export const PokeTypes = styled.div`
grid-area:PokeTypes;

`

export const PokeTypesBox = styled.div`
display:flex;
justify-content:space-around;
`



export const BoxStatus = styled.div`
display:grid;
width: 100%;
grid-template-rows: 1fr;
grid-template-columns: 1fr 1fr;
/* background-color:blue; */
justify-content:center;
margin: auto;
`

export const PokeMoves = styled.div`
display:grid;
flex-wrap: no-wrap;
grid-area:PokeMoves;
background-color:yellow;
max-height:300px;

`

export const AllMoves = styled.div`
display:flex;
flex-wrap: wrap;
flex-direction:column;
background-color:pink;
`