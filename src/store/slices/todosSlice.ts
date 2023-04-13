import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export type Todo = {
    id: number
    title: string
    description: string
    date: string
    status: boolean
    importance: number
}

type List = {
    id: number
    color: string
}

// Интерфейс initialStat
interface TodosState {
    todos: Todo[],
    lists: List[]
}

const initialState: TodosState = {
    todos: [],
    lists: []
}

export const counterSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<Todo>) {
            state.todos = [...state.todos, action.payload]

        },
        removeTodo(state, action: PayloadAction<number>) {
            state.todos.filter(todo => todo.id === action.payload)
        }
    },
})

export const {addTodo, removeTodo} = counterSlice.actions
export default counterSlice.reducer

