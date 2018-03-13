import React from 'react'
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'
import Footer from './containers/Footer'
import './styles/index.less'
const ReduxTodo = () => (
    <div id="redux-todo">
        <h1>todos</h1>
        <div className="main">
            <AddTodo />
            <TodoList />
            <Footer />
        </div>
    </div>
)
export default ReduxTodo