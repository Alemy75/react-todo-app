import s from './TodoItem.module.scss';
import React, { useState } from "react";
import DeleteSVG from '/src/assets/delete.svg'
import EditSVG from '/src/assets/edit.svg'
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Todo } from '../models/todos.models';


const TodoItem: React.FC<Todo> = (props) => {
    const [status, setStatus] = useState(props.status)

    const date = new Date(props.date)

    const formattedDate = date.toLocaleDateString();

    const updateStatusHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.checked)
    }

    return (
        <div className={s.item}>
            <div className={s.title}>
                <h3>{props.title}</h3>
                <div>
                    <img src={EditSVG} alt="Изменить" title="Изменить" />
                    <img src={DeleteSVG} alt="Удалить" title="Удалить" />
                </div>
            </div>
            <div>
                <p>{props.description}</p>
                <p>{formattedDate}</p>
                <div className={s.bottom}>
                    <span><h4>Важность:</h4> {props.importance === 2 ? 'Не важно' : props.importance === 1 && 'Важно'}</span>
                    <div className={s.input}>
                        <label htmlFor="">Выполнено</label>
                        <input checked={status} onChange={(event) => updateStatusHandler(event)} type="checkbox" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;