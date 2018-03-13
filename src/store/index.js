import { createStore, compose, applyMiddleware  } from 'redux'
import DevTools from '../devTools'
import reducer from '../reducers'
import thunk from 'redux-thunk'
const fn = store => next => action => {
    next(action)
}
const configureStore = preloadedState => createStore(
    reducer,
    preloadedState,
    compose(
        applyMiddleware(thunk, fn),
        DevTools.instrument()
    ) 
)
export default configureStore
