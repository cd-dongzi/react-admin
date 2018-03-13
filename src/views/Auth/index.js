import React from 'react'
import {Row, Col, Card, List} from 'antd'
import connect from 'connect'
@connect
export default class extends React.Component {
    render () {
        let user = this.props.state.user
	    return (
	        <div className="auth_wrapper">

                <Row className="gutter-row">
                    <Col md={24} className="gutter-col">
                        <Card title="当前用户的信息">
                            <List
                                grid={{ gutter: 16, column: 3 }}
                                dataSource={Object.keys(user).filter(key => key !== 'Auth_Token')}
                                renderItem={key => (
                                    <List.Item>
                                        <Card title={key}>{user[key]}</Card>
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
	    )
    }
}