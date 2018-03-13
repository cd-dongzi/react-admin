import React from 'react'
import {Row, Col, Card, Icon} from 'antd'
export default () => (
	<Row>
		<Col md={6} className="gutter-row">
			<Card bordered={false}>
				<div className="box">
					<div>
						<Icon type="usergroup-add" className="box_icon person_icon" />
					</div>
					<div>
						<span>人数</span>
						<h2>1423</h2>
					</div>
				</div>
			</Card>
		</Col>
		<Col md={6} className="gutter-row">
			<Card bordered={false}>
				<div className="box">
					<div>
						<Icon type="heart" className="box_icon like_icon" />
					</div>
					<div>
						<span>收藏</span>
						<h2>3472</h2>
					</div>
				</div>
			</Card>
		</Col>
		<Col md={6} className="gutter-row">
			<Card bordered={false}>
				<div className="box">
					<div>
						<Icon type="mail" className="box_icon email_icon" />
					</div>
					<div>
						<span>邮件</span>
						<h2>1245</h2>
					</div>
				</div>
			</Card>
		</Col>
		<Col md={6} className="gutter-row">
			<Card bordered={false}>
				<div className="box">
					<div>
						<Icon type="picture" className="box_icon picture_icon" />
					</div>
					<div>
						<span>图片</span>
						<h2>1000</h2>
					</div>
				</div>
			</Card>
		</Col>
	</Row>
)