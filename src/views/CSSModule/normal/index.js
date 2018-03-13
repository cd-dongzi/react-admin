import React from 'react'
import { Alert } from 'antd'
import styles from './index.css'

const descNode = () => (
    <div>
        <ul>
            <li><pre>1.webpack配置css-loader:  <span style={{color: '#ff4747'}}>style-loader!css-loader?modules</span></pre></li>
            <li><pre>2.index.css:  <span style={{color: '#ff4747'}}>
                {`.a {
    color: #ff4747;
}`}
            </span></pre></li>
            <li><pre>3.导入CSS： <span style={{color: '#ff4747'}}>import styles from './index.css'</span></pre></li>
            <li><pre>4.引用：<span style={{color: '#ff4747'}}>{'<div className={style.a}></div>'}</span></pre></li>
        </ul>
    </div>
)
const msgNode = () => (
    <div>
        <h2><a href="http://www.ruanyifeng.com/blog/2016/06/css_modules.html" target="_blank" style={{textDecoration: 'underline'}}>CSS Modules 用法教程</a></h2>
    </div>
)
class CssModuleNormal extends React.Component {
    render () {
        return (
            <div style={{ padding: '30px' }}>
                <Alert message={msgNode()} description={descNode()} type="info" />
                <ul>
                    <li className={styles.card}>这是CSSModule常规用法</li>
                    <li className={styles.card}>这是CSSModule常规用法</li>
                    <li className={styles.card}>这是CSSModule常规用法</li>
                    <li className={styles.card}>这是CSSModule常规用法</li>
                </ul>
            </div>
        )
    }
}

export default CssModuleNormal