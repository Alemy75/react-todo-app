import { Todo, List } from './../../models/todos.models';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Интерфейс initialStat
interface TodosState {
    todos: Todo[],
    lists: List[]
}

const initialState: TodosState = {
    todos: [],
    lists: [],
}

export const counterSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<Todo>) {
            state.todos = [action.payload, ...state.todos]
        },
        removeTodo(state, action: PayloadAction<number>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        changeStatus(state, action: PayloadAction<number>) {
            let findTodo = state.todos.find(todo => todo.id === action.payload)
            if (findTodo) {
                findTodo.status = !findTodo.status
            } 
        }
    },
})

export const todosActions = counterSlice.actions
export const todosReducer = counterSlice.reducer

