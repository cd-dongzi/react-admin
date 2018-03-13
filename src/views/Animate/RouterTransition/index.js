import React from 'react'
import {Button} from 'antd'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './index.less'


const NavLink = props => (
    <li className="navItem">
      <Link {...props} style={{ color: "inherit" }} />
    </li>
)

const HSL = ({ match: { params }}) => (
    <div
      className="hsl"
      style={{ background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`}}>
      <p>hsl({params.h}, {params.s}%, {params.l}%)</p>
      	<span onClick={() => {
      		location.href = '/'
      	}}>
      		<Button>返回首页</Button>
      	</span>
    </div>
)

const RGB = ({ match: { params } }) => (
    <div
      className="rgb"
      style={{ background: `rgb(${params.r}, ${params.g}, ${params.b})` }}>
      <p>rgb({params.r}, {params.g}, {params.b})</p>
      <Link to="/animate/fade">
      	<span onClick={() => {
      		location.href = '/'
      	}}>
      		<Button>返回首页</Button>
      	</span>
      </Link>
    </div>
)

export default () => (
  <Router>
    <div className="router_transition_wrapper">
      <Route 
      	exact
      	path="/animate/router-transition"
      	render={() => <Redirect to="/animate/router-transition/hsl/10/90/50" />}/>
      <Route render={ ({location}) => (
        <div className="fill">
          <ul className="nav">
              <NavLink to="/animate/router-transition/hsl/10/90/50">Red</NavLink>
              <NavLink to="/animate/router-transition/hsl/120/100/40">Green</NavLink>
              <NavLink to="/animate/router-transition/rgb/33/150/243">Blue</NavLink>
              <NavLink to="/animate/router-transition/rgb/240/98/146">Pink</NavLink>
          </ul>
          <div className="content">
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch location={location}>
                  <Route exact path="/animate/router-transition/hsl/:h/:s/:l" component={HSL} />
                  <Route exact path="/animate/router-transition/rgb/:r/:g/:b" component={RGB} />
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      )}/>
    </div>
  </Router> )