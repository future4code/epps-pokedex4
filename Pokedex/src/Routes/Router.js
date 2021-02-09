import Pokedex from '../Pages/Pokedex/Pokedex'
import Home from '../Pages/Home/Home'
import Details from '../Pages/Details/Details'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderHome from "../Components/HeaderHome/HeaderHome"
import HeaderPokedex from '../Components/HeaderPokedex/HeaderPokedex'

export default function Router() {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HeaderHome/>
                    <Home />
                </Route>
                <Route exact path="/pokedex">
                    <HeaderPokedex/>
                    <Pokedex />
                </Route>
                <Route exact path="/details">
                    <Details />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}