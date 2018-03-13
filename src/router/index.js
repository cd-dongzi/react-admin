import React from 'react'
import { Route, BrowserRouter, HashRouter } from 'react-router-dom'
import MainComponents from './main'

// import history from './history'
// window._history = history


export default () => (
    <HashRouter>
        <Route path="/" component={MainComponents}/>
    </HashRouter>
)

