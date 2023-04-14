import React, {FC, useEffect, useState} from 'react';
import s from './Form.module.scss';
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {addTodo, getLists, List, Todo} from "../store/slices/todosSlice";
import axios from "axios";
const BASE_URL = 'http://127.0.0.1:8000/'

const Form: FC = () => {
    const dispatch = useAppDispatch()
    const {lists} = useAppSelector(state => state.todos)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [status, setStatus] = useState(false)
    const [list, setList] = useState(0)

    const onSelectListHandler = (id: number):void => {
        setList(id)
    }
    useEffect(() => {
        axios.get(BASE_URL + 'api/todo/list/')
            .then(res => {
                dispatch(getLists(res.data))
            })
    } ,[])

    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let item: Todo = {
            id: Math.random(),
            title,
            description,
            date,
            status,
            list,
            importance: 2
        }
        console.log(item)
        const res = await axios.post(BASE_URL + 'api/todo/task/', item)
        dispatch(addTodo(item))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)} className={s.input} type="text" placeholder="Введите название..."/>
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)} className={s.input} type="text" placeholder="Введите описание..."/>
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDate(event.target.value)} className={s.input} type="date"/>
            <div className={s.input}>
                <label htmlFor="">Выполнено</label>
                <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setStatus(event.target.checked)} type="checkbox"/>
            </div>
            <div className={s.items}>
                {
                    lists.map((item: List) =>
                        <div
                            className={s.item}
                            key={item.id}
                            style={
                                list === item.id ? {background: '#ffd500', width: "20%"} : {background: item.color + "40", width: "20%"}
                            }
                            onClick={() => onSelectListHandler(item.id)}
                        >
                            {item.name}
                        </div>)
                }
            </div>
            <button type="submit">Добавить</button>
        </form>
    );
};

export default Form;