import {
    ADD_TODO,
    DELETE_TODO,
    CLEAR_TODO,
    EDIT_TODO,
    UPDATE_TODO,
    // MARK_COMPLETED
} from "./ActionType";

export const addNewTodo = (todo) => {

    return {
        type: ADD_TODO,
        payload: {
            id: new Date(),
            title: todo?.title,
            description: todo?.description,
        },
    };

};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id,
    };

};

export const clearTodo = () => {
    return {
        type: CLEAR_TODO,

    };

};

export const editTodo = (id) => {
    return {
        type: EDIT_TODO,
        payload: {
            id: id,

        },
        isEdit: true
    };

};

export const updateTodo = (id, todo) => {
    return {
        type: UPDATE_TODO,
        payload: {
            todoID: id,
            todoTitle: todo?.title,
            todoDescription: todo?.description,
        },
    };
};

// export const markTodoCompleate = (id) => {
//     return {
//         type: MARK_COMPLETED,
//         payload: {
//             seletedTodoID: id
//         }
//     }
// }