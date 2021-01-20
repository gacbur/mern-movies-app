import React from 'react'

import { Route, Switch } from 'react-router-dom'

import LandingPage from '../pages/LandingPage'
import Favourites from '../pages/Favourites'
import SingleMovie from '../pages/SingleMovie'


const Main = () => {
    return (
        <Switch>
            <div>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/favourites' component={Favourites} />
                <Route exact path='/movie/:id' component={SingleMovie} />
            </div>
        </Switch>
    )
}

export default Main
