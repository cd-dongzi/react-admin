import React from 'react'
import {Row, Col, Card, Modal, Button, Spin} from 'antd'
import axios from 'utils/axios'
import connect from 'connect'

const List = ({item}) => (
    <li>
        <h3>{item.name}</h3>
        <small>{item.source}</small>
        <p>{item.intro}</p>
    </li>
)

@connect

export default class Axios extends React.Component {
    state = {
        loading: false,
        list: []
    }
    componentDidMount = () => {
        axios.get('https://easy-mock.com/mock/5aa161bef6ed4a592fb5d6f4/admin-apis/componentDidMount')
            .then( res => {
                console.log(res)
                Modal.success({
                    title: 'componentDidMount',
                    content: res.data.msg,
                })
            })
    }

    componentRequest = async () => {
        this.setState({
            loading: true
        })
        let data = await axios.get('https://easy-mock.com/mock/5aa161bef6ed4a592fb5d6f4/admin-apis/test1')
        console.log(data)
        this.setState({
            loading: false,
            list: data.data.data.list
        })
    }

    reduxRequest = () => {
        this.props.getAsyncAction()
    }
    render () {
        let {loading, list} = this.state
        let {asyncAction} = this.props.state
        return (
            <Row className="gutter-row">
                <Col md={22} className="gutter-col">
                    <Card title="组件内请求">
                        <Button type="primary" onClick={this.componentRequest.bind(this)}>send</Button>
                        <Spin tip="Loading..." style={{display: loading?'block':'none'}}></Spin>
                        <ul>
                            {list.map( (item,index) => (
                                <List item={item} key={index}/>
                            ))}
                        </ul>
                    </Card>
                </Col>

                <Col md={22} className="gutter-col">
                    <Card title="redux请求">
                        <Button type="primary" onClick={this.reduxRequest.bind(this)}>send</Button>
                        <Spin tip="Loading..." style={{display: asyncAction.loading?'block':'none'}}></Spin>
                        <ul>
                            {asyncAction.list.map( (item,index) => (
                                <List item={item} key={index}/>
                            ))}
                        </ul>
                    </Card>
                </Col>
            </Row>
        )
    }
}