import React from 'react'
import { Row, Col, Card } from 'antd'
import LineCharts from './line-chart'
import TreeCharts from './tree-chart'
import CircleCharts from './circle-chart'
import RadarCharts from './radar-chart'
export default () => (
    <div className="recharts_wrapper">
        <Row gutter={16}>
            <Col md={24} className="gutter-row">
                <div>
                    <Card title="折线图" bordered={false}>
                        <LineCharts />
                    </Card>
                </div>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col md={24} className="gutter-row">
                <div>
                    <Card title="树状图" bordered={false}>
                        <TreeCharts />
                    </Card>
                </div>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col md={12} className="gutter-row">
                <div>
                    <Card title="圆形图" bordered={false}>
                        <CircleCharts />
                    </Card>
                </div>
            </Col>
            <Col md={12} className="gutter-row">
                <div>
                    <Card title="雷达图" bordered={false}>
                        <RadarCharts />
                    </Card>
                </div>
            </Col>
        </Row>
    </div>
)

