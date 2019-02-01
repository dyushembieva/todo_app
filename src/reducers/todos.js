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
            ];

        case 'REMOVE_TODO' :
            return  [...action.payload]

        case 'REMOVE_ALL':
            return [];

         default:
            return state
    }
}

export default todos