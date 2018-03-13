import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {message} from 'antd'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // Progress 进度条样式
import Layout from 'views/Layout'
import {allRoutes, asyncRouterMap} from './config'
import {whiteList} from 'src/config'
import {diff_obj, filterRoutes} from 'utils'
import {Cookie, Local} from 'utils/storage'
import actions from 'actions'

const getRoute = (routes, pathname) => {
    let fn = routes => routes.map(route => {
        if (route.path === pathname && !route.redirect) return route
        if (route.children) return fn(route.children).find(v => v)
        return false
    })
    return fn(routes).find(route => route)
}
/*当前路径的标题名*/
const getRouteName = (routes, pathname) => getRoute(routes, pathname).name


/*404判断*/
const isExistPath = (routes, pathname) => routes.some(route => {
    if (route.path === pathname) return true
    if (route.children) return isExistPath(route.children, pathname)
    return false
}) 

/*401判断*/
const isAuth = (role, user) => {
    if (!role || (user && user.roles.indexOf('admin') >= 0)) return true
    if (!user) return false
    return role.some( r => user.roles.indexOf(r) >= 0)
}


// 每个路由的权限判断
const hasPermission = (roles, route) => {
    if (route.role) {
        return roles.some(role => route.role.indexOf(role) >= 0)
    } else {
        return true
    }
}
// 通过权限过滤路由
const filterAsyncRouter = (routes, roles) => {
    let accessedRouters = routes.filter(route => {
        if (hasPermission(roles, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, roles)
            }
            return true
        }
        return false
    })
    return accessedRouters
}

/*是否需要重定向*/
const isRedirectPath = (routes, pathname) => routes.find(route => route.path === pathname && route.redirect && route.redirect !== route.path)


// 路由渲染
const RouteComponent = route => <Route key={route.path} exact={route.exact || false} path={route.path} component={route.component} /> 
// 路由表渲染
const renderRouteComponent = routes => routes.map((route, index) => {
    return route.children ? route.children.map(route => RouteComponent(route)) : RouteComponent(route)
})

// 带有layout的路由
const ComponentByLayout = ({history}) => (
    <Layout history={history}>
        <Switch>
            {renderRouteComponent(allRoutes.filter(route => route.layout))}
        </Switch>
    </Layout>   
)


class MainComponents extends React.Component {
    componentWillMount () {
        NProgress.start()
        this.dataInit(this.props)
    }
    componentWillReceiveProps(nextProps){
        this.dataInit(nextProps)
    }
    componentDidUpdate () {
        NProgress.start()
    }
    //数据初始化
    dataInit (props) {
        console.log(props)
        let {addTabView,addBreadCrumbs,setOpenKeys} = props
        let pathname = props.location.pathname
        let router = filterRoutes(pathname)
        // 添加tab
        addTabView({pathname})
        // 面包屑
        addBreadCrumbs(router)
        // slidebar展开的节点
        setOpenKeys(router.filter(route => route.children).map(route => route.path))
    }

    //获取用户信息
    async getUserInfo (cb){
        try {
            await this.props.getUser(Cookie.get('Auth_Token'))
            cb && cb()
        }catch(e) {
            message.error(e)
        }
    }
    
    // 设置路由
    setRoutesByRole (roles) {
        let {routes, setRoutes} = this.props
        let accessedRouters = []
        if (roles.indexOf('admin') >= 0) {
            accessedRouters = asyncRouterMap
        }else {
            accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        }
        setRoutes(accessedRouters)
    }

    // 401 
    render () {
        let {location: {pathname}, user} = this.props
        
        // 404
        if (!isExistPath(allRoutes, pathname)) return <Redirect to='/error/404'/>
        
        //当前路径路由信息
        let currRoute = getRoute(allRoutes, pathname)

        // 非白名单验证
        if (!whiteList.some(path => path === pathname)) {

            // 登录验证
            if (!Cookie.get('Auth_Token')) {
                return <Redirect to={{ pathname: '/login' }} />
            }
            
            // 获取用户信息
            if (!user) {
                this.getUserInfo(() => {
                    this.setRoutesByRole(this.props.user.roles)
                })
            }
        }
        // 401
        if (user && currRoute) {
            if (!isAuth(currRoute.role, user)) return <Redirect to='/error/401'/>
        }
        
        // 重定向子路径
        let route = isRedirectPath(allRoutes, pathname)
        if (route) return <Redirect to={route.redirect}/>

        // 网页title
        document.title = currRoute.name

        return (
            <Switch>
                {renderRouteComponent(allRoutes.filter(route => !route.layout))}
                <Route path="/" component={ComponentByLayout}/>
            </Switch>
        )
    }
}

export default connect(
    state => ({
        user: state.user,
        routes: state.routes
    }),
    dispatch => bindActionCreators(actions, dispatch)
)(MainComponents)
