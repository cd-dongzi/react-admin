import React from 'react'
import SideBar from './Sidebar'
import BreadCrumbs from './BreadCrumbs'
import TabViews from './TabViews'
import Hamburger from './Hamburger'
import Account from './Account'
import Screenfull from 'components/Screenfull'
import './index.less'
import connect from 'connect'
@connect
export default class extends React.Component {
    render () {
        const {children, state, history} = this.props
        return (
            <div>
                <SideBar/>
                <div id="container" className={state.collapsed ? 'collapsed':''}>
                    <header className="layout-header">
                        <div className="layout-header-bar">
                            <Hamburger className='hamburger'/>
                            <BreadCrumbs className='breadCrumbs'/>
                            <div className="fr r-btn">
                                <Screenfull className="screenfull"/>
                                <Account/>
                            </div>
                        </div>
                        <div className="layout-header-tabs"><TabViews/></div>
                    </header>
                    <main>
                        {children}
                    </main>
                </div>
            </div>
        )
    }
}

