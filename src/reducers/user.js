import { handleActions } from 'redux-actions'
import { constantRouterMap } from '../router/config'

export const user = handleActions({
    SAVE_USER: (state, action) => {
    	return action.payload
    },
    CLEAR_USER: state => null
}, null) 


/*routes*/
export const routes = handleActions({
    SET_ROUTES: (state, action) => [...constantRouterMap,...action.payload]
}, constantRouterMap)