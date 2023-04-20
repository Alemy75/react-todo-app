import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { List, Todo } from '../../models/todos.models'

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
		}),
		getLists: builder.query<List[], string>({
			query: () => ({
				url: `list`
			}),
		}),
		sendTodo: builder.mutation<any, Todo>({
			query: (todo: Todo) => ({
				url: `task`,
				method: 'POST',
				body: todo
			}),
		}),
		deleteTodo: builder.mutation<any, number>({
			query: (id: number) => ({
				url: `task/${id}`,
				method: 'DELETE'
			}),
		})
	}),
})

export const { useGetTodosQuery, useGetListsQuery, useSendTodoMutation, useDeleteTodoMutation } = todosApi