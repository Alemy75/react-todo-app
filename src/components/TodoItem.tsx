import s from './TodoItem.module.scss';
import {Todo} from "../store/slices/todosSlice";
import React from "react";


const TodoItem: React.FC<Todo> = (props) => {
    const date = new Date(props.date)
    const formattedDate = date.toLocaleDateString();


    return (
        <div className={s.item}>
            <h3>{props.title}</h3>
            <div>
                <p>{props.description}</p>
                <p>{formattedDate}</p>
                <p className={s.bottom}>
                   <span><h4>Важность:</h4> {props.importance === 2 ? 'Не важно' : props.importance === 1 && 'Важно'}</span>
                   <span><h4>Статус:</h4> {props.status ? 'Выполнено' : 'В процессе'}</span>
                </p>
            </div>
        </div>
    );
};

export default TodoItem;