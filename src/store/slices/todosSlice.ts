import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export type Todo = {
    id: number
    title: string
    description: string
    date: string
    status: boolean
    list: number
    importance: number
}

export type List = {
    id: number
    name: string
    color: string
}

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
        getTodos(state, action: PayloadAction<Todo[]>) {
            state.todos = action.payload

        },
        getLists(state, action: PayloadAction<List[]>) {
            state.lists = action.payload
        },
        addTodo(state, action: PayloadAction<Todo>) {
            state.todos = [...state.todos, action.payload]

        },
        removeTodo(state, action: PayloadAction<number>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    },
})

export const {getTodos, getLists, addTodo, removeTodo} = counterSlice.actions
export default counterSlice.reducer

