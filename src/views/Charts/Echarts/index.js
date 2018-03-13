import React from 'react'
import { Row, Col, Card } from 'antd'
import AreaCharts from './area-charts'
import RelationCharts from './relation-charts'
import PieCharts from './pie-chart'

export default () => (
    <div className="echarts_wrapper">
        <Row gutter={16} className="gutter-row">
            <Col md={24}>
                <div>
                    <Card title="区域图" bordered={false}>
                        <AreaCharts />
                    </Card>
                </div>
            </Col>
        </Row>
        <Row gutter={16} className="gutter-row">
            <Col md={12}>
                <div>
                    <Card title="关系图" bordered={false}>
                        <RelationCharts />
                    </Card>
                </div>
            </Col>
            <Col md={12}>
                <div>
                    <Card title="饼图" bordered={false}>
                        <PieCharts />
                    </Card>
                </div>
            </Col>
        </Row>
    </div>
)

