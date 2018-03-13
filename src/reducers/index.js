import { combineReducers } from 'redux'
import * as app from './app'
import * as common from './common'
import * as user from './user'

//redux todo
import todo from 'views/Knowledge/Redux/reducers'

export default combineReducers({
    ...app,
    ...common,
    ...todo,
    ...user
})
