import s from './TodoItem.module.scss';
import { changeStatus, removeTodo, Todo } from "../store/slices/todosSlice";
import React, { useState } from "react";
import DeleteSVG from '/src/assets/delete.svg'
import EditSVG from '/src/assets/edit.svg'
const BASE_URL = 'http://127.0.0.1:8000/'
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

const TodoItem: React.FC<Todo> = (props) => {
    const dispatch = useAppDispatch()
    
    const [status, setStatus] = useState(props.status)

    const date = new Date(props.date)

    const formattedDate = date.toLocaleDateString();

    const onDeleteHAndler = async (id: number) => {
        const res = await axios.delete(BASE_URL + `api/todo/task/${props.id}/`)
        dispatch(removeTodo(id))
    }

    const updateStatusHandler = async(event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStatus(props.id))
        setStatus(event.target.checked)

        async function sendStatus() {
            let updatedStatus = {
                status
            }
            console.log(updatedStatus)
            const res = await axios.patch(BASE_URL + `api/todo/task/${props.id}/`, JSON.stringify(updatedStatus))   
        }

        sendStatus()
    }

    return (
        <div className={s.item}>
            <div className={s.title}>
                <h3>{props.title}</h3>
                <div>
                    <img src={EditSVG} alt="Изменить" title="Изменить" />
                    <img onClick={() => onDeleteHAndler(props.id)} src={DeleteSVG} alt="Удалить" title="Удалить" />
                </div>
            </div>
            <div>
                <p>{props.description}</p>
                <p>{formattedDate}</p>
                <div className={s.bottom}>
                    <span><h4>Важность:</h4> {props.importance === 2 ? 'Не важно' : props.importance === 1 && 'Важно'}</span>
                    <div className={s.input}>
                        <label htmlFor="">Выполнено</label>
                        <input checked={status} onChange={(event) => updateStatusHandler(event)} type="checkbox"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;