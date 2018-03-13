import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter, visibilityStatus, clearTodo } from '../actions/todo'

const Footer = ({dispatch, active, len}) => {
    const set = filter => {
        dispatch(setVisibilityFilter(filter))
    }
    return (
        <footer>
            <span className="todo-count">
                <strong>{len}</strong>
                <span> items </span>
                <span>left</span>
            </span>
            <ul className="filters">
                {visibilityStatus.map((v, index) => (
                    <li key={index}><a href="javascript:;" className={v.filter === active ? 'selected':''} onClick={e => {
                        e.stopPropagation()
                        set(v.filter)
                    }}>{v.text}</a></li>
                ))}
            </ul>
            <button className="clear-completed" onClick={e => {
                dispatch(clearTodo())
            }}>Clear completed</button>
        </footer>
    )
}

const mapDispatchToProps = state => ({
    active: state.visibilityFilter,
    len: state.todos.length || 0
})
export default connect(
    mapDispatchToProps 
)(Footer)