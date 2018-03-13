import React from 'react'
import { Timeline } from 'antd'
const Item = Timeline .Item
const list = [
    {desc: '登陆验证- 2018/3', color: 'green'},
    {desc: '路由监控- 2018/4', color: 'green'},
    {desc: '版本迭代- 2018/5', color: 'red'},
    {desc: '版本迭代- 2018/6', color: 'blue'},
    {desc: '版本迭代- 2018/7', color: 'yellow'},
    {desc: '版本迭代- 2018/8', color: 'blue'},
]
export default () => (
    <div className="home-task">
        <small>10个已经完成，2个待完成，1个正在进行中</small>
        <Timeline>
            {list.map( (item, index) => <Item key={index} color={item.color}>{item.desc}</Item>)}
        </Timeline>
    </div>
)
