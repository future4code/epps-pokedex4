import Router from './Routes/Router.js'
import GlobalState from './Global/GlobalState'
import Header from './Components/Header/Header.js';

function App() {
  return (
    <GlobalState>      
      <Router/>
    </GlobalState>
  );
}

export default App;
