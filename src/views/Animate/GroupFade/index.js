import React from 'react'
import {Row, Col, Card, Button} from 'antd'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {AnimateGroupFade} from 'assets/md'
import './index.less'

const Fade = ({ children, ...props }) => {
  	return (
  		<CSSTransition
    		{...props}
    		timeout={1000}
    		classNames="fade">
    		{children}
  		</CSSTransition>
	)
}


class TodoList extends React.Component {
  	constructor(props) {
    	super(props)
    	this.state = { items: ['hello', 'world', 'click', 'me'] }
  	}
  	handleAdd() {
    	this.setState({
      		items: [
        		...this.state.items,
        		prompt('Enter some text')
      		]
    	})
  	}
  	handleRemove(i) {
    	let newItems = this.state.items.slice()
    	newItems.splice(i, 1)
    	this.setState({ items: newItems })
  	}
  	render() {
    	return (
    		<Row className="gutter-row fmt">
				<Col className="gutter-col" md={24}>
					<Card title="react-transition-group">
						<div dangerouslySetInnerHTML={{__html: AnimateGroupFade}}></div>
					</Card>
				</Col>

				<Col className="gutter-col" md={8}>
					<Card title="实例演示">
		        		<TransitionGroup className='todo-list'>
		          			{this.state.items.map((item, i) => (
		            			<Fade key={item}>
		              				<div>
		                				{item}
		             	   				<button type="primary" onClick={() => this.handleRemove(i)}>&times;</button>
		              				</div>
		           				</Fade>
		          			))}
		        		</TransitionGroup>
		        		<Button type="primary" onClick={() => this.handleAdd()}>Add Item</Button>
					</Card>
				</Col>
			</Row>
      		
    	)	
  	}
}

export default TodoList