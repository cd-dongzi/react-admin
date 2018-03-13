import React from 'react'
import {Card} from 'antd'
import './index.less'
export default class Bingding extends React.Component {
	constructor () {
		super()
		this.state = {
			value: '',
			value1: 'test'
		}
	}
	handleInput (value) {
		this.setState({
			value
		})
	}
	handleInput1 (value1) {
		this.setState({
			value1
		})
	}
	render () {
		return (
			<div className="binding_wrapper">
				<Card title="双向绑定" style={{width: '400px',margin: '50px'}}>
					<input type="text" value={this.state.value} onChange={e => {this.handleInput(e.target.value)}}/>
					<div>{this.state.value}</div>
				</Card>
				<Card title="双向绑定" style={{width: '400px',margin: '50px'}}>
					<input type="text" value={this.state.value1} onChange={e => {this.handleInput1(e.target.value)}}/>
					<div>{this.state.value1}</div>
				</Card>
			</div>
			
		)
	}
}