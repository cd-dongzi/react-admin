import React from 'react'
import {Row, Col, Card} from 'antd'

export default () => (
    <Row className="gutter-row">
        <Col md={22} className="gutter-col">
            <Card title="componentWillMount">
                <p>
                    组件渲染之前调用
                </p>
            </Card>
        </Col>
        <Col md={22} className="gutter-col">
            <Card title="componentDidMount">
                <p>
                    组件第一次渲染后调用
                </p>
            </Card>
        </Col>
        <Col md={22} className="gutter-col">
            <Card title="componentWillReceiveProps">
                <p>
                    在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用
                </p>
            </Card>
        </Col>
        <Col md={22} className="gutter-col">
            <Card title="shouldComponentUpdate">
                <p>
                    返回一个布尔值。在组件接收到新的props或者state时被调用。返回 true 就是允许更新, 返回 false 就是不允许更新,把决定权交给开发者
                </p>
            </Card>
        </Col>
        <Col md={22} className="gutter-col">
            <Card title="componentWillUpdate">
                <p>
                    在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
                </p>
            </Card>
        </Col>
        <Col md={22} className="gutter-col">
            <Card title="componentDidUpdate">
                <p>
                    在组件完成更新后立即调用。在初始化时不会被调用
                </p>
            </Card>
        </Col>
        <Col md={22} className="gutter-col">
            <Card title="componentWillUnmount">
                <p>在组件从 DOM 中移除的时候立刻被调用。</p>
            </Card>
        </Col>
    </Row>
)
