import React from 'react'
import {
    render
} from 'react-dom'
import { createStore, compose, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import Router from './router'
import configureStore from './store'
import DevTools from './devTools'
import 'src/actions'
import 'utils/iconfont'
// import 'antd/dist/antd.less'
import './styles/index.css'
import './styles/index.less'
import 'components/Markdown/markdown.css'

const store = configureStore()
//{process.env.NODE_ENV === 'production'?'':<DevTools/>}
render(
    <Provider store={store}>
        <div>
            <Router/> 
        </div>
    </Provider>
, document.getElementById('app'))
