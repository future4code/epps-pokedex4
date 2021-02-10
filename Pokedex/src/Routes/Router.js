import Pokedex from '../Pages/Pokedex/Pokedex'
import Home from '../Pages/Home/Home'
import Details from '../Pages/Details/Details'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from '../Components/Header/Header'

export default function Router() {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/">                    
                    <Header/>
                    <Home />
                </Route>
                <Route exact path="/pokedex">
                    <Header/>
                    <Pokedex />
                </Route>
                <Route exact path="/details">
                    <Header/>
                    <Details />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}