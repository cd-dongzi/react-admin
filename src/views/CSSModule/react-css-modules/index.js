import React from 'react'
import { Alert } from 'antd'
import CSSModules from 'react-css-modules'
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
            <li><pre>4.导入react-css-modules： <span style={{color: '#ff4747'}}>import CSSModules from 'react-css-modules'</span></pre></li>
            <li><pre>5.包裹所需的组件：<span style={{color: '#ff4747'}}>CSSModules(component, styles, [options])</span></pre></li>
            <li><pre>4.引用：<span style={{color: '#ff4747'}}>{'<div styleName="a"></div>'}</span></pre></li>
        </ul>
    </div>
)
const msgNode = () => (
    <div>
        <h2><a href="https://www.npmjs.com/package/react-css-modules" target="_blank" style={{textDecoration: 'underline'}}>react-css-modules 用法</a></h2>
    </div>
)
class CssModuleComponent extends React.Component {
    render () {
        return (
            <div style={{ padding: '30px' }}>
                <Alert message={msgNode()} description={descNode()} type="info" />
                <ul>
                    <li styleName='card'>这是react-css-modules用法</li>
                    <li styleName='card'>这是react-css-modules用法</li>
                    <li styleName='card'>这是react-css-modules用法</li>
                    <li styleName='card card_fl'>这是react-css-modules用法</li>
                </ul>
            </div>
        )
    }
}
const CssModuleReactCSSModule = CSSModules(CssModuleComponent, styles, {
    allowMultiple: true //允许多个class一起使用
})
export default CssModuleReactCSSModule