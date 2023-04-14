import s from './TodoItem.module.scss';
import {removeTodo, Todo} from "../store/slices/todosSlice";
import React from "react";
import DeleteSVG from '/src/assets/delete.svg'
import EditSVG from '/src/assets/edit.svg'
const BASE_URL = 'http://127.0.0.1:8000/'
import axios from "axios";
import {useAppDispatch} from "../hooks/hooks";

const TodoItem: React.FC<Todo> = (props) => {
    const dispatch = useAppDispatch()

    const date = new Date(props.date)

    const formattedDate = date.toLocaleDateString();

    const onDeleteHAndler = async (id: number) => {
        const res = await axios.delete(BASE_URL + `api/todo/task/${props.id}/`)
        dispatch(removeTodo(id))
    }

    return (
        <div className={s.item}>
            <div className={s.title}>
                <h3>{props.title}</h3>
                <div>
                    <img src={EditSVG} alt="Изменить" title="Изменить"/>
                    <img onClick={() => onDeleteHAndler(props.id)} src={DeleteSVG} alt="Удалить" title="Удалить"/>
                </div>
            </div>
            <div>
                <p>{props.description}</p>
                <p>{formattedDate}</p>
                <div className={s.bottom}>
                   <span><h4>Важность:</h4> {props.importance === 2 ? 'Не важно' : props.importance === 1 && 'Важно'}</span>
                   <span><h4>Статус:</h4> {props.status ? 'Выполнено' : 'В процессе'}</span>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;