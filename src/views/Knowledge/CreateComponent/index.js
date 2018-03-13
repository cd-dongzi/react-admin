import React from 'react'
import {Row, Col, Card} from 'antd'
import {createComponent} from 'assets/md/knowledge'
export default class extends React.Component {
    render () {
        return (
            <div className="component_write_wrapper markdown_box">
                <Row className="fmt gutter-row">
                    <Col md={12} className="gutter-col">
                        <Card title="React.createClass">
                            <div dangerouslySetInnerHTML={{__html: createComponent.html1}}></div>
                        </Card>
                    </Col>
                    <Col md={12} className="gutter-col">
                        <Card title="React.Component">
                            <div dangerouslySetInnerHTML={{__html: createComponent.html2}}></div>
                        </Card>
                    </Col>
                    <Col md={24} className="gutter-col">
                        <Card title="无状态函数式组件">
                            <div dangerouslySetInnerHTML={{__html: createComponent.html3}}></div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
