const todos = (state = [], action) => {

    switch (action.type) {

        case 'ADD_TODO':

            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: action.payload.completed,
                    edit: action.payload.edit
                }
            ]
        // case 'TOGGLE_TODO':
        //     return state.map(todo =>
        //         todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        //     )
         default:
            return state
    }
}

export default todos