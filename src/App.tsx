import './sass/index.scss'
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import {useEffect, useState} from "react";
import {getTodos, getLists, Todo} from "./store/slices/todosSlice";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import axios from "axios";
const BASE_URL = 'http://127.0.0.1:8000/'

function App() {
    const dispatch = useAppDispatch()
    const {todos} = useAppSelector(state => state.todos)

    useEffect(() => {
        async function fetchTodos() {
            let res = await axios.get(BASE_URL + 'api/todo/task?ordering=-id')
            dispatch(getTodos(res.data))
        }
        fetchTodos()
    }, [])

    return (
        <div className="App">
            <div className="container">
                <h1>Список задач</h1>
                <Form/>
                {
                    todos.map((todo: Todo) => <TodoItem
                        key={todo.id}
                        {...todo}
                    />)
                }
            </div>
        </div>
    )
}

export default App
