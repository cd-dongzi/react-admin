import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const toggleTodoStatus = (state = false, action) => {
    switch(action.type) {
        case 'SET_TOGGLE_TODO_STATUS':
            return state = !state
        default:
            return state
    }
}

const TodoApp = {
    todos,
    visibilityFilter,
    toggleTodoStatus
}

export default TodoApp