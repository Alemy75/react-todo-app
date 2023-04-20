import { configureStore } from '@reduxjs/toolkit'
import {todosReducer} from "./todo/todos.slice";
import { todosApi } from './todo/todos.api';

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware),
})
// Тип корневого состояния
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch