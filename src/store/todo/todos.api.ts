import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Todo } from '../../models/todos.models'

export const todosApi = createApi({
	reducerPath: 'todos/api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/todo/' }),
	endpoints: (builder) => ({
		getTodos: builder.query<Todo[], string>({
			query: (order: string) => ({
				url: `task`,
				params: {
					ordering: order
				}
			}),
		})
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetTodosQuery} = todosApi