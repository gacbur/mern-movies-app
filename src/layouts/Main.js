import React from 'react'

import { Route, Switch } from 'react-router-dom'

import LandingPage from '../pages/LandingPage'
import Favorites from '../pages/Favorites'
import SingleMovie from '../pages/SingleMovie'
import PageNotFound from '../pages/PageNotFound'

const Main = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route path='/favorites' component={Favorites} />
                <Route path='/movie/:id' component={SingleMovie} />
                <Route component={PageNotFound} />
            </Switch>
        </>
    )
}

export default Main
