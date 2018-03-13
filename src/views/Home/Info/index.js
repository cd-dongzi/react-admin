import React from 'react'
import {Row, Col, Card, Progress} from 'antd'
export default () => (
	<div className="info_wrapper">
		<div className="info_header">
			<img src={require('../../../assets/info-cover.jpg')} alt=""/>
		</div>
		<div className="info_body">
			<div className="info_title">
				<div className="info_avatar bg-cover-all"></div>
				<div className="info_name">咚子</div>
			</div>
			<ul>
				<li>
					<span>Javascript</span>
					<Progress percent={50} />
				</li>
				<li>
					<span>CSS</span>
					<Progress percent={40} />
				</li>
				<li>
					<span>HTML</span>
					<Progress percent={40} />
				</li>
				<li>
					<span>Vue</span>
					<Progress percent={40} />
				</li>
				<li>
					<span>Webpack</span>
					<Progress percent={30} />
				</li>
				<li>
					<span>React</span>
					<Progress percent={30} />
				</li>
				<li>
					<span>NodeJs</span>
					<Progress percent={30} />
				</li>
			</ul>
		</div>
	</div>
)