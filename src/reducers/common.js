import { handleActions } from 'redux-actions'

export const asyncAction = handleActions({
    GET_ASYNC_ACTION: (state, action) => ({
        list: action.payload.list || [],
        loading: action.payload.loading
    }) 
}, {
	list: [],
	loading: false
}) 