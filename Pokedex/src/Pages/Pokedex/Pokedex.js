import React from "react";
import {goToPage} from '../../Routes/Coordinator'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

function Pokedex() {

  const history = useHistory()

    return (
      <div>

        pokedex

        <div>
          <button onClick={() => goToPage(history, '/details' )}>Detalhes</button>
        </div>

      </div>
    );
  }
  
  export default Pokedex;
  