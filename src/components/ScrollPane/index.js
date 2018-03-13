import React from 'react'
import './index.less'

const padding = 15

export default class extends React.Component {
    state = {
        left: 0
    }
    handleScroll = e => {
        const eventDelta = e.wheelDelta || -e.deltaY * 3
        const $container = this.refs.scrollContainer
        const $containerWidth = $container.offsetWidth
        const $wrapper = this.refs.scrollWrapper
        const $wrapperWidth = $wrapper.offsetWidth
        let left = this.state.left
        if (eventDelta > 0) {
            left = Math.min(0, left + eventDelta)
        } else {
          if ($containerWidth - padding < $wrapperWidth) {
            if (left < -($wrapperWidth - $containerWidth + padding)) {
              left = left
            } else {
              left = Math.max(left + eventDelta, $containerWidth - $wrapperWidth - padding)
            }
          } else {
            left = 0
          }
        }
        console.log(left)
        this.setState({
            left 
        })
    }
    render () {
        let children = this.props.children
        return (
            <div className="scroll-container" ref="scrollContainer" onWheel={e => {
                e.preventDefault()
                this.handleScroll(e)
            }}>
                <div className="scroll-wrapper" ref="scrollWrapper" style={{left: this.state.left + 'px'}}>
                    {children}
                </div>
            </div>
        )
    }
}
