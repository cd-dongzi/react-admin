import React from 'react'
import {Row, Col, Card} from 'antd'
import Github from 'components/Github'
import './index.less'
export default () => (
    <div className="github_wrapper">
    	<Row className="gutter-row">
    	    <Col md={24} className="gutter-col">
    	        <Card title="实例展示">
    	            <Github link='http://dzblog.cn' size='100'/>
    	            <Github link='http://dzblog.cn' className="yellow"/>
    	            <Github link='http://dzblog.cn' className="pink"/>
    	            <Github link='http://dzblog.cn' style={{fill: 'blue', color: '#fff'}}/>
    	        </Card>
    	    </Col>
    	</Row>
        
    </div>
)