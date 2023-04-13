import './sass/index.scss'
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import {useEffect, useState} from "react";

function App() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/todo/task/')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className="App">
            <div className="container">
                <h1>Список задач</h1>
                <Form/>
                {
                    items.map(todo => <TodoItem
                        id={todo.id}
                        title={todo.title}
                        description={todo.description}
                        date={todo.date}
                        status={todo.status}
                        list={todo.list}
                        importance={todo.importance}
                    />)
                }
            </div>
        </div>
    )
}

export default App
