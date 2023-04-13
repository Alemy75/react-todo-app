import { configureStore } from '@reduxjs/toolkit'
import todosReducer from "./slices/todosSlice";
export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
})
// Тип корневого состояния
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch