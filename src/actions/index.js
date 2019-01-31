export const addTodo = (id, text, completed, edit) => {
    let payload = {
        id: id,
        text: text,
        completed: completed,
        edit: edit
    };

    return {
       type: 'ADD_TODO',
       payload: payload
    }
};


export const deleteTodo = (index, todoList) => {
    todoList.splice(index, 1);
    return {
        type: 'REMOVE_TODO',
        payload: todoList
    }
};


export const editTodo = (index) => {};

export const removeAllTodo = () => {};

export const removeByCompleted = () => {};