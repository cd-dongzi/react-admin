import React from 'react'
import {Row, Col, Card} from 'antd'
import IconSvg from 'components/Icon-svg'
import {componentSvg} from 'assets/md'
import './index.less'

export default () => (
    <div className="icon_svg_wrapper">
        <Row className="gutter-row">
            <Col md={24} className="gutter-col">
                <Card title="SVG图标">
                    <div className="fmt" dangerouslySetInnerHTML={{__html: componentSvg}}></div>
                </Card>
            </Col>
            <Col md={24} className="gutter-col">
                <Card title="实例展示">
                    <IconSvg iconName='icon2'/>
                    <IconSvg iconName='zan'/>
                    <IconSvg iconName='icon--'/>
                    <IconSvg iconName='video'/>
                </Card>
            </Col>
        </Row>

        
    </div>
)