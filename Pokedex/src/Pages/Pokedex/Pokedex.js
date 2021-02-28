import React, {useContext} from "react";
import { goToPage } from '../../Routes/Coordinator'
import { useHistory } from 'react-router-dom'

import GlobalStateContext from "../../Contexts/GlobalStateContext";
import PokedexList from "../../Components/PokedexList/PokedexList";

function Pokedex() {
  const { states, setters, requests } = useContext(GlobalStateContext)
  const history = useHistory()

  return (
    <>
      <PokedexList/>   
    </>
  );
}

export default Pokedex;
