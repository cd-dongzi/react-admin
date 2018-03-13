import React from 'react'
import PropTypes from 'prop-types'
class IconSvg extends React.Component {
    render () {
        let {className, iconName} = this.props
        return (
            <svg className={`icon ${className}`} aria-hidden="true">
                <use xlinkHref={`#icon-${iconName}`}></use>
            </svg>
        )
    } 
}
IconSvg.PropTypes = {
    iconName: PropTypes.string.isRequired
}
export default IconSvg

