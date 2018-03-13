import React from 'react'
import {Button, Icon} from 'antd'
import './index.less'

export default ({history}) => (
	<div className="errer_404_wrapper">
        <h2>OOPS!</h2>
        <img src={require('./404.png')} alt="404" className="animated swing hinge"/>                
        <Button style={{display: 'block', margin: '50px auto'}} onClick={() => {history.push('/')}}><Icon type="home" />Go Home</Button>
    </div>
)