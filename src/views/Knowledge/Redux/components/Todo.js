import React from 'react'
import { connect } from 'react-redux'
import { delTodo } from '../actions/todo'
const Todo = ({id, completed, text, onTodoClick, dispatch}) => {
    return (
        <li>
            <div className="view" onClick={ () => {
                    onTodoClick(id)
                }}>
                <input type="checkbox" checked={completed} readOnly className="toggle"/>
                <label className={completed ? 'completed':''}>{text}</label>
                <button className="destroy" onClick={
                    e => {
                       e.stopPropagation()
                       dispatch(delTodo(id))
                    }
                }></button>
            </div>
        </li>
    )
}
export default connect()(Todo)