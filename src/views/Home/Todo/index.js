import React from 'react'
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'
import Footer from './containers/Footer'
import './styles/index.less'
const Todo = () => (
    <div id="home-todo">
        <div className="main">
            <AddTodo />
            <TodoList />
            <Footer />
        </div>
    </div>
)
export default Todo