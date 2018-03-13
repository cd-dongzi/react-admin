const list = [
    {id: 1, text: 'star this repository', completed: true},
    {id: 2, text: 'fork this repository', completed: true},
    {id: 3, text: 'follow author', completed: false},
    {id: 4, text: '任务1', completed: false},
    {id: 5, text: '任务2', completed: true},
    {id: 6, text: '任务3', completed: false},
    {id: 7, text: '任务4', completed: true},
]
const todos = (state = list, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map( todo => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        case 'TOGGLE_TODO_ALL':
            console.log(action)
            if (action.active) {
                return state.map( todo => {
                    todo.completed = false
                    return todo
                })
            }
            return state.map( todo => {
                todo.completed = true
                return todo
            })
            
        case 'CLEAR_TODO':
            return []
        case 'DEL_TODO':
            let index = state.findIndex(todo => todo.id == action.id)
            state.splice(index, 1)
            return [...state]
        default:
            return state
    }
}

export default todos