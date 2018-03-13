import React from 'react'
import {Tag} from 'antd'
import connect from 'connect'
import {Link, withRouter} from 'react-router-dom'
import ScrollPane from 'components/ScrollPane'
@connect
@withRouter
class TabViews extends React.Component {
    render () {
        let {state, delTabView, location} = this.props
        let pathname = location.pathname
        return (
            <ScrollPane>
                {state.tabViews.map( (tab, index) => (
                    <Tag key={tab.path} 
                        closable 
                        onClose={e => {
                            e.stopPropagation()
                            delTabView(tab)
                        }}  color={tab.path === pathname ? '#108ee9':''}><Link to={tab.path}>{tab.name}</Link></Tag>
                ) )}
            </ScrollPane>
        )
    }
}

export default TabViews