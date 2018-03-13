import React from 'react'
import {Row, Col, Card, Button} from 'antd'
import {Transition} from 'react-transition-group'
import {AnimateFadeHtml} from 'assets/md'

const duration = 300
const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	opacity: 0,
  	padding: 20,
  	display: 'inline-block',
  	backgroundColor: '#8787d8'
}
const transitionStyles = {
	entering: { opacity: 0 },
  	entered: { opacity: 1 }
}
const AnimateComponent = ({in: inPro}) => (
	<Transition
		in={inPro}
		timeout={duration}>
		{status => {
			console.log(status)
			return (
				<div style={{
					...defaultStyle,
					...transitionStyles[status]
				}}>
					Fade动画
				</div>
			)
		}}
	</Transition>
)
class Fade extends React.Component {
	state = {
		show: true
	}
	handleToggle = () => {
		this.setState({
			show: !this.state.show
		})
	}
	render () {
		return (
			<Row className="gutter-row fmt">
				<Col className="gutter-col" md={24}>
					<Card title="react-transition-group">
						<div dangerouslySetInnerHTML={{__html: AnimateFadeHtml}}></div>
					</Card>
				</Col>

				<Col className="gutter-col" md={24}>
					<Card title="实例演示">
						<Button type="primary" onClick={this.handleToggle.bind(this)} style={{display: 'block', marginBottom: '10px'}}>toggle</Button>
						<AnimateComponent in={this.state.show}/>
					</Card>
				</Col>
			</Row>
		)
	}
}
export default Fade