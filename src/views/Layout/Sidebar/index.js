import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import IconSvg from 'components/Icon-svg'
// import { routes } from 'src/router/config'
import './index.less'
import connect from 'connect'
const { Content, Sider } = Layout
const { SubMenu, Item } = Menu

const createSubMenuComponents = (route, pathname, history) => {
    const children = route.children.filter(route => !route.hidden)
    return (
            <SubMenu key={route.path} title={<span><Icon type={route.icon}/><span>{route.name}</span></span>}>
                {children.map( item => {
                    let names = [route.name],
                        paths = [route.path]
                    return !item.children ? 
                    (<Menu.Item key={item.path}>
                        <Link to={item.path} onClick={e => {
                            if (pathname !== item.path) history.push(item.path)
                            e.preventDefault()
                        }}>{item.name}</Link>
                    </Menu.Item>) : createSubMenuComponents(item, pathname, history)
                })}
            </SubMenu>
    ) 
}

@connect
@withRouter
class SideBar extends React.Component {

    onOpenChange = openKeys => {
        let router = this.props.state.routes.filter(route => route.layout)
        this.props.setOpenKeys([openKeys.pop()])
    }
    render () {
        let {openKeys, breadCrumbs, routes} = this.props.state
        let {location : {pathname}, history} = this.props
        return (
            <div id="sidebar_wrapper">
                <Layout>
                    <Sider
                        trigger
                        collapsed={this.props.state.collapsed}
                    >
                        <div className="logo">
                            <a target="_blank" style={{display: 'inline-block'}} href="https://github.com/cd-dongzi" alt="Github">
                                <IconSvg iconName="github" className="logo_github"/>
                            </a>
                        </div>
                        <Menu 
                            mode="inline" 
                            theme="dark"
                            onOpenChange={this.onOpenChange}
                            openKeys={openKeys}
                            selectedKeys={[breadCrumbs[breadCrumbs.length-1].path]}
                            >
                            {routes.filter(route => !route.hidden).map( route => {
                                if (!route.children) {
                                    return (
                                        <Menu.Item key={route.path}>
                                            <Link to={route.path} onClick={e => {
                                                if (pathname !== route.path) history.push(route.path)
                                                e.preventDefault()
                                            }}>
                                                <Icon type={route.icon} />
                                                <span>{route.name}</span>
                                            </Link>
                                        </Menu.Item>
                                    )
                                }
                                return createSubMenuComponents(route, pathname, history)
                            })}
                        </Menu> 
                    </Sider>
                </Layout>
            </div>
        )
    }
}
export default SideBar

