import React from 'react'
import {Row, Col, Card} from 'antd'
import Markdown from 'components/Markdown'
import './index.less'

export default class MarkdownView extends React.Component {
	constructor() {
		super()
		this.state = {
			markdown: '',
			html: ''
		}
	}
	callback (data) {
		let {markdown, html} = data
		this.setState({
			markdown,
			html
		})
	}
	render () {
		return (
			<div className="markdown_wrapper">
				<Row gutter={16}>
					<Col span={24}>
						<Card title="Markdown编辑器"><Markdown value="**Markdown**" callback={this.callback.bind(this)}/></Card>
					</Col>
	                <Col span={12}>
	                    <Card title="同步转换MarkDown" bordered={true}>
	                        <pre style={{whiteSpace: 'pre-wrap'}}>{this.state.markdown}</pre>
	                    </Card>
	                </Col>
					<Col span={12}>
	                    <Card title="同步转换HTML" bordered={true}>
	                        <pre>{this.state.html}</pre>
	                    </Card>
	                </Col>
				</Row>
  			</div>
		)
	}
}