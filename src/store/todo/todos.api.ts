import { IStatus } from './../../models/todos.models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { List, Todo } from '../../models/todos.models'

export const todosApi = createApi({
	reducerPath: 'todos/api',
	tagTypes: ['Todos'],
	baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/todo/' }),
	endpoints: (builder) => ({
		getTodos: builder.query<Todo[], string>({
			query: (order: string) => ({
				url: `task`,
				params: {
					ordering: order
				}
			}),
			providesTags: (result) => result
				? [
					...result.map(({ id }) => ({ type: 'Todos' as const, id })),
					{ type: 'Todos', id: 'LIST' },
				]
				: [{ type: 'Todos', id: 'LIST' }],
		}),
		getLists: builder.query<List[], string>({
			query: () => ({
				url: `list`
			}),
		}),
		sendTodo: builder.mutation<any, Todo>({
			query: (todo: Todo) => ({
				url: `task/`,
				method: 'POST',
				body: todo
			}),
			invalidatesTags: [{type: 'Todos', id: 'LIST'}]
		}),
		deleteTodo: builder.mutation<any, number>({
			query: (id: number) => ({
				url: `task/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: [{type: 'Todos', id: 'LIST'}]
		}),
		updateStatus: builder.mutation<any, IStatus>({
			query: (status: IStatus) => ({
				url: `task/${status.id}/`,
				method: 'PATCH',
				body: {
					status: status.status
				}
			}),
			invalidatesTags: [{type: 'Todos', id: 'LIST'}]
		}),
	}),
})

export const { useGetTodosQuery, useGetListsQuery, useSendTodoMutation, useDeleteTodoMutation, useUpdateStatusMutation } = todosApi