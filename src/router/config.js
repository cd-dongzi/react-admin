import asyncComponent from './asyncComponent'

const _import_components = file => asyncComponent(() => import(`components/${file}`))

const _import_views = file => asyncComponent(() => import(`views/${file}`))

const setChildrenRoles = routes => routes.map(route => {
    let role = route.role
    if (!role) return route

    let fn = (children, role) => {
        return children.map(child => {
            child.role = Array.from(new Set([...(child.role || []), ...role]))
            if (child.children) {
                child.children = fn(child.children, child.role)
            }
            return child
        })
    }
    if (route.children) {
        route.children = fn(route.children, role)
    }
    return route
})


// react-router-config
const asyncRouterMapList = [
    {
        path: '/auth',
        login: true,
        layout: true,
        icon: 'lock',
        name: '权限管理',
        role: ['admin'],
        component: _import_views('Auth')
    },
    {
        path: '/knowledge',
        login: true,
        layout: true,
        icon: 'calendar',
        name: 'react知识点',
        redirect: '/knowledge/syntax',
        children: [
            { path: '/knowledge/syntax', component: _import_views('Knowledge/Syntax'), name: '常用语法' },
            { path: '/knowledge/life-cycle', component: _import_views('Knowledge/LifeCycle'), name: '生命周期' },
            { path: '/knowledge/create-component', component: _import_views('Knowledge/CreateComponent'), name: '组件写法' },
            { path: '/knowledge/binding', component: _import_views('Knowledge/Binding'), name: '双向绑定' },
            { path: '/knowledge/redux', component: _import_views('Knowledge/Redux'), name: 'Redux' },
            { path: '/knowledge/async', component: _import_views('Knowledge/AsyncComponent'), name: '按需加载' },
            { path: '/knowledge/request', component: _import_views('Knowledge/Request'), name: '网络请求' }
        ]
    },
    {
        path: '/components',
        login: true,
        layout: true,
        icon: 'database',
        name: '组件',
        redirect: '/components/github',
        children: [
            { path: '/components/github', component: _import_views('Components/Github'), name: 'Github' },
            { path: '/components/icon-svg', component: _import_views('Components/Icon-svg'), name: 'svg图标' },
        ]
    },
    {
        path: '/animate',
        login: true,
        layout: true,
        icon: 'smile-o',
        name: 'react动画',
        role: ['animate'],
        redirect: '/animate/fade',
        children: [
            { path: '/animate/fade', component: _import_views('Animate/Fade'), name: '渐变' },
            { path: '/animate/group-fade', component: _import_views('Animate/GroupFade'), name: '列表渐变' },
            { path: '/animate/slide', component: _import_views('Animate/Slide'), name: '滑动' },
            { path: '/animate/router-transition', component: _import_views('Animate/RouterTransition'), name: '路由过渡动画'}
        ]
    },
    {
        path: '/CSSModule',
        login: true,
        layout: true,
        icon: 'layout',
        name: 'CSSModule',
        redirect: '/CSSModule/normal',
        children: [
            { path: '/CSSModule/normal', component: _import_views('CSSModule/normal'), name: '常规用法' },
            { path: '/CSSModule/react-css-modules', component: _import_views('CSSModule/react-css-modules'), name: 'react-css-modules' },
        ]
    },
    {
        path: '/editor',
        login: true,
        layout: true,
        icon: 'edit',
        name: '编辑器',
        role: ['editor'],
        redirect: '/editor/markdown',
        children: [
            { path: '/editor/markdown', component: _import_views('Editor/Markdown'), name: 'Markdown'},
            { path: '/editor/draft', component: _import_views('Editor/Draft'), name: '富文本'}
        ]
    },
    {
        path: '/charts',
        login: true,
        layout: true,
        icon: 'area-chart',
        name: '图表',
        redirect: '/charts/echarts',
        children: [
            { path: '/charts/echarts', component: _import_views('Charts/Echarts'), name: 'Echarts'},
            { path: '/charts/recharts', component: _import_views('Charts/Recharts'), name: 'Recharts'}
        ]
    },
    {
        path: '/error',
        login: true,
        layout: true,
        icon: 'question-circle-o',
        name: 'ErrorPage',
        redirect: '/error/404',
        children: [
            { path: '/error/404', component: _import_views('Error/NotFound'), name: '404'},
            { path: '/error/401', component: _import_views('Error/NotAuth'), name: '401'}
        ]
    },
]

export const constantRouterMap = [
    {
        path: '/login',
        login: false,
        hidden: true,
        name: '账号登陆',
        component: _import_views('Login')
    },
    {
        path: '/',
        exact: true,
        login: true,
        layout: true,
        icon: 'user',
        name: '首页',
        component: _import_views('Home')
    }
]
export const asyncRouterMap = setChildrenRoles(asyncRouterMapList)
export const allRoutes = constantRouterMap.concat(asyncRouterMap)
export const routes = constantRouterMap

// export const asyncRouterMap 

