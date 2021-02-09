import React from "react";
import {goToPage} from '../../Routes/Coordinator'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

function Details() {

  const history = useHistory()

    return (
      <div>
        details
        <button onClick={() => goToPage(history, '/pokedex' )}>Voltar</button>
      </div>
      
    );
  }
  
  export default Details;
  