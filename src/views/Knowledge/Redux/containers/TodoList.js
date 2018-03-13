import React from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'
import { toggleTodo } from '../actions/todo'
const TodoList = ({ todos, onTodoClick }) => {
    return (
    <section className="todo-list">
        <ul>
            {todos.map(todo => (<Todo key={todo.id} {...todo} onTodoClick={onTodoClick}></Todo>))}
        </ul>
    </section>
)
}

const getVisibleTodos = (todos, filter) => {
    console.log(todos, filter)
    switch(filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed)
        default: 
            return todos
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
    onTodoClick: toggleTodo
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)