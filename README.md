
#### 用到react相关的生态链模块:
  * `react`
  * `react-dom`
  * `react-router-dom`: react-router4以后 好像都是用这个东西了 
  * `react-transition-group`: 用来做动画的
  * `redux`: 用来管理全局状态
  * `react-redux`: 用来管理全局状态
  * `redux-actions`: 用来创建action的，而且生成相关reducers的时候也不要写 switch/case 或 if/else 了，主要是方便。
  * `redux-thunk`: `redux`的中间件， 用来处理我们异步action
  * `antd`: 随便找的一个比较常用的react-UI库

 跟react相关的主要就是这个几个了
 至于webpack 配置，基本跟以前配置vue的基本没多大区别。

#### 文件目录讲解：
  * `build`: 用来放置关于webpack的配置
  * `config`: 项目配置
  * `src`: 源码
  * `static`: 静态资源
  * `.babelrc`: babel配置
  * `postcss.config.js`: css配置

#### 别的目录就不说了，主要介绍一个`src`下的目录结构
  * `actions`: 放redux中action相关的地方
  * `reducers`: 放redux中reducer相关的地方
  * `assets`: 项目静态资源
  * `components`: 常用的公共组件
  * `router`: 路由相关的配置
  * `store`: redux的配置
  * `styles`: 公共样式文件
  * `utils`: 工具类的封装
  * `view`: 所有页面的主体结构
  * `main.js`: 项目入口文件
  * `config.js`: 公共属性配置

### 1. react 的 几种书写方式
* React.createClass

```
import React from 'react'
const MyComponent = React.createClass({
   render () {
       return (
           <h2>我是React.createClass生成的组件</h2>
       )
   }
})
```
  1. React.createClass会自绑定函数方法（不像React.Component只绑定需要关心的函数）导致不必要的性能开销，增加代码过时的可能性
  2. React.createClass的mixins不够自然、直观；

---

* React.Component

```
import React from 'react'
class MyComponent from React.Component {
    render () {
        return (
            <h2>我是React.Component生成的组件</h2>
        )
    }
}
```
  1. 需要手动绑定this指向
  2. React.Component形式非常适合高阶组件（Higher Order Components--HOC）,它以更直观的形式展示了比mixins更强大的功能，并且HOC是纯净的JavaScript，不用担心他们会被废弃

---

* 无状态函数式组件

```
import React from 'react'
 const MyComponent = (props) => (
     <h2>我是无状态函数式组件</h2>
 )
 ReactDOM.render(<MyComponent name="Sebastian" />, mountNode)
```
  1. 无状态组件的创建形式使代码的可读性更好，并且减少了大量冗余的代码，精简至只有一个render方法，大大的增强了编写一个组件的便利
  2. 组件不会被实例化，整体渲染性能得到提升
  3. 组件不能访问this对象
  4. 组件无法访问生命周期的方法
  5. 无状态组件只能访问输入的props，同样的props会得到同样的渲染结果，不会有副作用


### 2. 路由拦截
 路由拦截这块费了挺长时间，本来是想找个类似vue的beforeRouter这个种钩子函数，发现没有。

 然后后面找到`history`模块，发现有个这东西有个监听路由的方法，最开始就用这它，但是我突然切成hash模式进行开发的时候，发现通过`history.push(path, [state])`设置state属性的时候出了问题，这东西好像只能给history模式设置state属性，但是我有部分东西是通过设置state属性来进来的，于是便放弃了这个方法寻找新的方法。

 后面发现可以通过监听根路径的 `componentWillReceiveProps` 钩子函数 便可以达到监听的效果。

 这钩子函数只要props改变便会触发，因为每次切换路由 `location` 的`pathname`总是不同的，所有只要切换路径便会触发这个这个钩子函数。这东西容易触发死循环，所以记得做好判断。

```
class MainComponents extends React.Component {
    componentWillMount () { // 第一次进来触发
        this.dataInit(this.props)
    }
    componentWillReceiveProps(nextProps){ // 以后每次变化props都会触发
        // 如果死循环了 可能是某个属性设置会更新props上属性，所以导致一直循环，这个时候记得做好判断
        this.dataInit(nextProps)
    }
    render () {
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

        // 网页title
        document.title = currRoute.name
    }
}

```

### 3. 路由集中设置
  用过vue的都知道我们一般都是通过`new Router({routes})` 来集中管理路由表。但是react-router好像不能这么设置。最新的版本好像连嵌套都不行。
  于是乎自己便着手简单的搭建了一个集中设置的版本 。不过后面我看到个插件好像是可以管理的 [react-router-config](https://www.npmjs.com/package/react-router-config),不过我也还没试过，也不知道可不可行。

```
// 路由表
const allRoutes = [
  {
    path: '/auth',
    login: true,
    layout: true,
    icon: 'user',
    name: '权限管理',
    role: ['admin'],
    component: _import_views('Auth')
  },
  {
    path: '/error',
    login: true,
    layout: true,
    icon: 'user',
    name: 'ErrorPage',
    redirect: '/error/404',
    children: [
        { path: '/error/404', component: _import_views('Error/NotFound'), name: '404'},
        { path: '/error/401', component: _import_views('Error/NotAuth'), name: '401'}
    ]
  }
  ...
]


// 根目录
<BrowserRouter>
    <Route path="/" component={MainComponents}/>
</BrowserRouter>

// MainComponents
class MainComponents extends React.Component {
  render () {
    return (
      <Switch>
          {renderRouteComponent(allRoutes.filter(route => !route.layout))} //不需要侧边栏等公共部分的路由页面
          <Route path="/" component={ComponentByLayout}/>
      </Switch>
    )
  }
}

// ComponentByLayout
const ComponentByLayout = ({history}) => (
  <Layout history={history}>
      <Switch>
          {renderRouteComponent(allRoutes.filter(route => route.layout))}
      </Switch>
  </Layout>   
)


// 路由渲染
const RouteComponent = route => <Route key={route.path} exact={route.exact || false} path={route.path} component={route.component} /> 
const renderRouteComponent = routes => routes.map((route, index) => {
    return route.children ? route.children.map(route => RouteComponent(route)) : RouteComponent(route)
})
```

### 4. 根据用户权限动态生成路由
  我想根据用户不同的权限生成不同的侧边栏。

```
{
  path: '/auth',
  login: true,
  layout: true,
  icon: 'user',
  name: '权限管理',
  role: ['admin'],
  component: _import_views('Auth')
}
```
根据这个路由role信息 跟用户的role信息匹配进行显示跟隐藏

这样来筛选出符合这个用户的路由表以及侧边栏（侧边栏根据路由表生成）

但是有个问题，因为我们是需要登录才能得知用户的权限信息，所以我们得那个时候才能确定路由是哪些。

但是那个时候路由已经设置完毕了。`vue`里面的提供了 `router.addRoutes`这个方法来供我们动态设置路由，`react`里面我也没找到关于这个api的，于是我便采取所有的路由都注册一遍，但是这样便产生一个问题。

以 `/auth` 为例，我本身是没有访问`/auth`的权限，所以我侧边栏不会生成 `/auth`这个列表选项。但是我们在地址栏里面 访问 `/auth` 是能进入这个页面的的 (最好的办法就是压根就不生成这个路由)。所以这个设置其实是有问题，目前我也没知道怎么动态生成路由的办法，暂时也只是在`根目录` 做了权限处理


### 5. 按需加载
  按需加载的方法也不少，目前只尝试了第一种，因为我写Vue也是用import实现按需加载的，所以也就没去折腾了。

#### 1. **import方法**

```
//asyncComponent.js
import React from 'react'
export default loadComponent => (
    class AsyncComponent extends React.Component {
        state = {
            Component: null,
        }
        async componentDidMount() {
            if (this.state.Component !== null) return

            try {
                const {default: Component} = await loadComponent()
                this.setState({ Component })
            }catch (err) {
                console.error('Cannot load component in <AsyncComponent />');
                throw err
            }
        }

        render() {
            const { Component } = this.state
            return (Component) ? <Component {...this.props} /> : null
        }
    }
)


// index.js
import asyncComponent from './asyncComponent.js'
const _import_ = file => asyncComponent(() => import(file))
_import_('components/Home/index.js')
```

原理很简单:
  * import()接受相应的模块然后返回Promise对象
  * asyncComponent 接收一个函数，且这个函数返回promise对象
  * 在componentDidMount钩子函数通过 async/await 执行接受进来的loadComponent方法，得到import返回的结果，赋值给state.Component,
  * 因为我们import的是一个React组件，所以我们得到的也是React组件，到时候只需要把该组件 render出去就行了

#### 2. [**Bundle组件 + import（跟第一种感觉差不多）**](https://www.jianshu.com/p/547aa7b92d8c)
#### 3. [**react-loadable**](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/code-splitting.md)
#### 4. [**bundle-loader**](https://segmentfault.com/a/1190000009539836)

### 6. request
我这里用到的是`axios`, 用`axios`做了个简单的拦截器

```
import axios from 'axios'
import qs from 'qs'


axios.defaults.withCredentials = true 

// 发送时
axios.interceptors.request.use(config => {
    // 发起请求,可以进行动画啥的
    return config
}, err => {
    return Promise.reject(err)
})

// 响应时
axios.interceptors.response.use(response => response, err => Promise.resolve(err.response))

// 检查状态码
function checkStatus(res) { 
    // 得到返回结果,结束动画啥的
    if (res.status === 200 || res.status === 304) {
        return res.data
    }
    return {
        code: 0,
        msg: res.data.msg || res.statusText,
        data: res.statusText
    }
    return res
}


// 检查CODE值
function checkCode(res) {
    if (res.code === 0) {
        throw new Error(res.msg)
    }
    
    return res
}

export default {
    get(url, params) {
        if (!url) return
        return axios({
            method: 'get',
            url: url,
            params,
            timeout: 30000
        }).then(checkStatus).then(checkCode)
    },
    post(url, data) {
        if (!url) return
        return axios({
            method: 'post',
            url: url,
            data: qs.stringify(data),
            timeout: 30000
        }).then(checkStatus).then(checkCode)
    }
}

```

### 7. redux
这里主要用了 [`redux-actions`](https://www.npmjs.com/package/redux-actions) 来创建action的 ， 
**原生写法**

```
// action
const addTodo = text => ({
    type: 'ADD_TODO',
    payload: {
      text,
      completed: false
    }
})

// reducer
const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        ...
        default:
            return state
    }
}
```

用了 `redux-actions`的写法

```
import { createAction, handleActions } from 'redux-actions'

// action
const addTodo = createAction('ADD_TODO')

// reducer
const todos = handleActions({
    ADD_TODO: (state, action) => {
        return [...state, action.payload]
    }
    ...
}, [])
```
// 用`redux-actions`简单明了

### 8. connect
用了redux,这东西基本就不能少了, `connect`主要是用来 连接 `组件` 跟 `redux store`的, 就是让组件能获取redux store里面的 `值` 和 `方法`
`connect([mapStateToProps], [mapDispatchToProps], [mergeProps],[options])`

一般只用到前两个参数
  * `mapStateToProps(state, ownProps)`: 获取store里面state指定数据,然后传递到指定组件, ownProps 组件本身的 props
  * `mapDispatchToProps`: 这个是获取store里面的action方法, 然后传入指定组件 

**用法**

```
import toggleTodo from 'actions/todo'
const mapStateToProps = state => ({
    active: state.active
})
const mapDispatchToProps = {
    onTodoClick: toggleTodo
}
connect(mapStateToProps, mapDispatchToProps)(Component)
// 在Component组件中, 便能在 props 里面获取到 active 数据, 跟 onTodoClick 这个方法了
```

`connect`很多地方基本都要用到
所以也进行了封装

```
// connect.js
import actions from 'src/actions' // 所有action
import {connect} from 'react-redux' 
import {bindActionCreators} from 'redux'
export default connect(
    state => ({state}), // 偷懒了, 每次把state里面所有的数据都返回了
    dispatch => bindActionCreators(actions, dispatch) //合并所有action,并且传入dispatch, 那样我们在组件里面调用action,就不在需要dispatch了
)
```
[bindActionCreators](https://www.kancloud.cn/allanyu/redux-in-chinese/82434)

然后我们把 `connect.js` 文件通过 `webpack` 的alias属性来进行配置

```
//配置别名映射
alias: {
    'src': resolve('src'),
    'connect': resolve('src/utils/connect')
}
```
然后我们就可以在文件中如下引用

```
import React from 'react'
import connect from 'connect'

@connect // 通过装饰器调用
class Component extends React.Component {
  componentWillMount () {
    const {state, onTodoClick} = this.props
    console.log(state, onTodoClick)
  }
}
```
为了省事，我把`store`里面所有的数据 和 `action`都返回了。


### 9. cssModules
在 `vue` 中 我们一般都是通过设置 style标签的 `scoped` 属性来做到css模块化
但是在 `react` 中，我采用的 `cssModules` 来做css模块化

1. 通过`webpack`设置 `css-loader` 的`modules`来开启css的模块化 

```
{
    loader: 'css-loader',
    options: {
      modules: true, //是否开启
      localIdentName: '[name]__[local]___[hash:base64:5]'  // 转化出来的class名字结构
    }
},
```
2. 引入css, 并通过对象的赋值方式添加className

```
import styles from './styles.css'

export default () => (
  <div className={styles.a}></div>
)

//styles.css
.a {
    color: #ff4747;
}

```

或者可以通过 [`react-css-modules`](https://www.npmjs.com/package/react-css-modules) 来更方便的控制`class`类名
```
import styles from './styles.css'
import CSSModules from 'react-css-modules'

class Component extends React.Component {
  render () {
    return (
      <div styleName='a b'></div>
    )
  }
}
export default CSSModules(Component, styles, {
    allowMultiple: true //允许多个class一起使用
})


//styles.css
.a {
    color: #ff4747;
}
.b {
  background: #f00;
}
```
这样我们就可以通过字符串的方式传入 `class`类名. 注意: 我们添加时 不再使用 `className` 了, 而是使用 `styleName`了

### 10. 双向绑定的实现

```
class Bingding extends React.Component {
  state = {
    value: ''
  }
  handleInput = value => {
    this.setState({
      value
    })
  }
  render () {
    return (
      <input type="text" value={this.state.value} onChange={e => {this.handleInput(e.target.value)}}/>
      <div>{this.state.value}</div>
    )
  }
}
```
就是通过 `onChange` 事件 来触发 `this.setState` 重新渲染 render 方法

还有一些知识点
包括 [`动画`](https://reactcommunity.org/react-transition-group/)，[`生命周期`](https://zhuanlan.zhihu.com/p/24926575) 等等
就不过多介绍了。这些项目中基本多多少少都参和了一点。
开发中遇到的问题挺多的，最主要是`react-router`配置的问题，怎么配置都感觉不太好。
也同时希望有人推荐几个全面的尤其是最新版本的`react`开源项目。


项目启动步骤
1. npm/yarn run dll (DllPlugin打包,只需打包一次就够了)
2. npm/yarn run dev (开发模式)
3. npm/yarn run build (生产模式)



## 小结
  国内比较火的两个框架，也勉强算是都接触了下，`vue`我是一直在用的，`react`算是年后刚接触的。
  从我目前来看，`vue`比`react`开发起来确实要方便很多(可能用的比较多吧)。
  因为`vue`很多常用的都是内置的。而`react`基本都要自己去寻找对应的模块。本身就只提供UI， 其他基本得自力更生。
  主要是你经常一找能找着多个模块，你就不知道用哪个，还得一个个试水。当然，`react`的社区强大，这么都不是什么大问题。

[在线观看地址](http://dzblog.cn/cases/react-admin/index.html)

[博客地址](http://dzblog.cn/article/5aa7ef0e4f85ad06d2346688)
