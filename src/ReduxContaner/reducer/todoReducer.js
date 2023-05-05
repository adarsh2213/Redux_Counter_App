import {
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO,
    CLEAR_TODO,
    // MARK_COMPLETED,
    EDIT_TODO
} from "../Action/ActionType";

const initialState = {
    todos: [
        {
            id: 1,
            title: "TodoList First 1",
            description: "This is the First Todo",
            iscomplated: true,
            isPanding: false
        },
        
    ],
    isEdit: false,
    editTodoId: "",
};

const todoreducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            const { id, title, description } = action.payload;
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: id,
                        title: title,
                        description: description,
                        iscomplated: true,
                        isPanding: false
                    },
                ],
                isEdit: action.isEdit,

            }
        case DELETE_TODO:
            const newTodoList = state.todos.filter((item) => item.id != action.id);
            return {
                ...state,
                todos: newTodoList,
            };
        case EDIT_TODO:
            const editTodo = action.payload;
            let newEditTodo = state?.todos?.find((item) => item.id === editTodo?.id);
            return {
                ...state,
                isEdit: action.editTodo,
                editTodo: newEditTodo
            };

        case UPDATE_TODO:
            const { todoID, todoTitle, todoDescription } = action.payload;
            const todos = state.todos.filter((todo) => {
                return todo.id !== todoID
            })

            const todo = state.todos.find((todo) => todo?.id === todoID);
            todo.title = todoTitle;
            todo.description = todoDescription;
            todo.iscomplated = todo?.iscomplated;
            todo.isPanding = todo?.isPanding;
            todos.push(todo);

            return {
                ...state,
                todos: [...todos],
                isEdit: false,
            };

        // case MARK_COMPLETED:
        //     const { selectedTodoId } = action.payload;
        //     let allTodos = [];

        //     selectedTodoId.forEach((id) => {
        //         allTodos = state.todos.filter((todo) => {
        //             return todo.id !== id;
        //         });

        //         const selectedTodo = state.todos.find((todo) => todo?.id === id);
        //         selectedTodo.title = selectedTodo?.title;
        //         selectedTodo.description = selectedTodo?.description;
        //         selectedTodo.iscomplated = true;
        //         selectedTodo.isPanding = selectedTodo?.isPanding;
        //         allTodos.push(selectedTodo);
        //     });

        //     return {
        //         ...state,
        //         todos: [...allTodos],
        //         isEdit: false,
        //     };

        case CLEAR_TODO:
            return {
                ...state,
                todos: [],
            };

        default:
            return state;
    }
};
export default todoreducer;








