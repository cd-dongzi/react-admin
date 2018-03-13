import { createAction } from 'redux-actions'
import { message } from 'antd'
import {Cookie} from 'utils/storage'

const users = [
    {
        userName: 'admin',
        password: '123456',
        roles: ['admin'],
        Auth_Token: 'admin'
    },
    {
        userName: 'editor',
        password: '123456',
        roles: ['editor'],
        Auth_Token: 'editor'
    },
    {
        userName: 'animate',
        password: '123456',
        roles: ['animate'],
        Auth_Token: 'animate'
    }
]

// 登录
const createSaveUser = createAction('SAVE_USER')
export const loginUser = (loginInfo) => async dispatch => {
    let { userName, password} = loginInfo
    return new Promise( (resolve, reject) => {

        // 发起异步请求  获取信息
        /*
            ...
            axios(url, {userName, password})
         */
           
        // 暂时假数据代替 
        let user = users.find(v => v.userName === userName)
        if (!user) return reject('用户名错误')
        if (user.password !== password) return reject('密码错误')
        resolve(user)
        Cookie.set('Auth_Token', user.Auth_Token)
    })
}


// 获取用户信息
const createGetUser = createAction('GET_USER')
export const getUser = (token) => async dispatch => {
    return new Promise( (resolve, reject) => {

        // 发起异步请求  获取信息
        /*
            ...
            axios(url, {token})
         */
        // 暂时假数据代替 
        let user = users.find(v => v.Auth_Token === token)
        if (!user) return reject('token验证失败! 请退出重新登录')
        dispatch(createSaveUser(user))
        resolve(user)
    })
}

//清除用户信息
export const clearUser = createAction('CLEAR_USER')


// routes
export const setRoutes = createAction('SET_ROUTES')