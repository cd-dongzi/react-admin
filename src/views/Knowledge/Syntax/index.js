import React from 'react'
import {Row, Col, Card} from 'antd'
import {syntax} from 'assets/md/knowledge'

export default () => (
    <Row className="gutter-row fmt">
        <Col md={22} className="gutter-col">
            <Card title="html转义">
                <div dangerouslySetInnerHTML={{__html: syntax.html1}}></div>
            </Card>
        </Col>

        <Col md={22} className="gutter-col">
            <Card title="扩张运算符传递属性">
                <div dangerouslySetInnerHTML={{__html: syntax.html2}}></div>
            </Card>
        </Col>
    </Row>
)
