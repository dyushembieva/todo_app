let nextTodoId = 0




export const addTodo = (id, text, completed, edit) => {

    let payload = {
        id: id,
        text: text,
        completed: completed,
        edit: edit
    }

    console.log('payload', payload)


    return {
       type: 'ADD_TODO',
       payload: payload
    }


}

