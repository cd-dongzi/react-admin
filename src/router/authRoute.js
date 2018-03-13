import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Cookie, Local } from 'utils/storage'


export default class extends React.Component {
    render () {
        let {component: Component, ...rest} = this.props
        // 是否登录
        if (!Cookie.get('Auth_Token')) {
            return <Redirect to={{ pathname: '/login' }} />
        }

        return <Route {...rest}  render={
            props => {
                return <Component {...props} />
            }
        }/>
    }
}
