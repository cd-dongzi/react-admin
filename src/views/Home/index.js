import React from 'react'
import Panel from './Panel'
import Todo from './Todo'
import Info from './Info'
import Steps from './Steps'
import {Row, Col, Card} from 'antd'
import './index.less'

export default () => (
	<div className="home_wrapper">
		<Panel/>
		<Row className="home_body">
			<Col md={9} className="gutter-row">
				<Card bordered={false}>
					<Steps/>
				</Card>
			</Col>
			<Col md={9} className="gutter-row">
				<Card bordered={false}>
					<Todo/>
				</Card>
			</Col>
			<Col md={6} className="gutter-row">
				<Card bordered={false}>
					<Info/>
				</Card>
			</Col>
		</Row>
	</div>
)