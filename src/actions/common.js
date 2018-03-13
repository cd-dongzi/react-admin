import { createAction } from 'redux-actions'
import axios from 'utils/axios'

//异步
const url = 'https://easy-mock.com/mock/5aa161bef6ed4a592fb5d6f4/admin-apis/test1'
const createGetAsyncAction = createAction('GET_ASYNC_ACTION')
export const getAsyncAction = () => async dispatch => {
	dispatch(createGetAsyncAction({
		loading: true
	}))
    let res = await axios.get(url)
    console.log(res)
    dispatch(createGetAsyncAction({
    	list: res.data.data.list,
    	loading: false
    }))
}

