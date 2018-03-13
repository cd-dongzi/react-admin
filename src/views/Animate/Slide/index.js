import React from 'react'
import {Row, Col, Card, Button, Input} from 'antd'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './index.less'
const Search = Input.Search
const duration = 1000
const TransitionComponent = ({i, v, remove, children, classNames, ...rest }) => (
	<CSSTransition 
		{...rest}
		timeout={duration}
		classNames={classNames}>
		<div className="child">
			<Card style={{width: '300px'}}>{v}</Card>
			<Button style={{width: '80px'}} onClick={remove}>X</Button>
		</div>
	</CSSTransition>
)
export default class Slide extends React.Component {
	state = {
		leftList: [
			'left111',
		],
		rightList: [
			'right111',
		],
		topList: [
			'top111',
		],
		bottomList: [
			'bottom111',
		]
	}
	add = (value, key) => {
		let list = this.state[key],
			state = this.state
		state[key] = [...list, value]
		this.setState(state)
	}
	remove = (i, key) => {
		let list = this.state[key],
			state = this.state
		list.splice(i,1)
		state[key] = list
		this.setState(state)
	}
	render () {
		return (
			<div>
				<Row className="gutter-row">
					<Col className="gutter-col" md={12}>
						<Card title="slide-left">
							<Search
						      placeholder="text"
						      onSearch={value => this.add(value, 'leftList')}
						      style={{ width: 200 }}
						      enterButton="ADD"
						    />
							<div className="slide-view-box">
								<TransitionGroup>
									{this.state.leftList.map((v,i) => (
										<TransitionComponent key={i} v={v} remove={this.remove.bind(this, i, 'leftList')} classNames='slide-left'/>
									))}
								</TransitionGroup>
							</div>
						</Card>
					</Col>
					<Col className="gutter-col" md={12}>
						<Card title="slide-right">
							<Search
						      placeholder="text"
						      onSearch={value => this.add(value, 'rightList')}
						      style={{ width: 200 }}
						      enterButton="ADD"
						    />
							<div className="slide-view-box">
								<TransitionGroup>
									{this.state.rightList.map((v,i) => (
										<TransitionComponent key={i} v={v} remove={this.remove.bind(this, i, 'rightList')} classNames='slide-right'/>
									))}
								</TransitionGroup>
							</div>
						</Card>
					</Col>
					<Col className="gutter-col" md={12}>
						<Card title="slide-top">
							<Search
						      placeholder="input search text"
						      onSearch={value => this.add(value, 'topList')}
						      style={{ width: 200 }}
						      enterButton="ADD"
						    />
							<div className="slide-view-box">
								<TransitionGroup>
									{this.state.topList.map((v,i) => (
										<TransitionComponent key={i} v={v} remove={this.remove.bind(this, i, 'topList')} classNames='slide-top'/>
									))}
								</TransitionGroup>
							</div>
						</Card>
					</Col>
					<Col className="gutter-col" md={12}>
						<Card title="slide-bottom">
							<Search
						      placeholder="input search text"
						      onSearch={value => this.add(value, 'bottomList')}
						      style={{ width: 200 }}
						      enterButton="ADD"
						    />
							<div className="slide-view-box">
								<TransitionGroup>
									{this.state.bottomList.map((v,i) => (
										<TransitionComponent key={i} v={v} remove={this.remove.bind(this, i, 'bottomList')} classNames='slide-bottom'/>
									))}
								</TransitionGroup>
							</div>
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}