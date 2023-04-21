import './sass/index.scss'
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import { useGetTodosQuery } from './store/todo/todos.api';
import { Todo } from './models/todos.models';

function App() {
    const {data: todos, isLoading, isError} = useGetTodosQuery('-id')

    return (
        <div className="App">
            <div className="container">
                <h1>Список задач</h1>
                <Form/>
                {isLoading &&
                    <p>Звгрузка...</p>
                }
                {todos &&
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
