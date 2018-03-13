let nextTodoId = 8

// 添加
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId ++,
    text
})

// 删除
export const delTodo = id => ({
    type: 'DEL_TODO',
    id
})

// 清除
export const clearTodo = () => ({
    type: 'CLEAR_TODO'
})

// 切换
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})


// 设置全选/全不选的状态
export const setToggleTodoStatus = () => {
    type: 'SET_TOGGLE_TODO_STATUS'
}
// 全选/全不选
export const toggleTodoAll = (active) => ({
    type: 'TOGGLE_TODO_ALL',
    active
})




// 过滤
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

// 状态
export const visibilityStatus = [
    { filter: 'SHOW_ALL',  text: 'All' },
    { filter: 'SHOW_COMPLETED',  text: 'Completed' },
    { filter: 'SHOW_ACTIVE',  text: 'Active' }
]
