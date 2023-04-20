import React, { FC, useState } from 'react';
import s from './Form.module.scss';
import Lists from './Lists';
import { Todo } from '../models/todos.models';
import { useSendTodoMutation } from '../store/todo/todos.api';
import axios from 'axios'

const Form: FC = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [list, setList] = useState(0)
    const [sendTodo, { isLoading }] = useSendTodoMutation()

    const onSelectListHandler = (id: number): void => {
        setList(id)
    }


    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let payload: Todo = {
            id: Math.random(),
            title,
            description,
            date,
            status: false,
            list,
            importance: 2
        }
        sendTodo(payload)
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)} className={s.input} type="text" placeholder="Введите название..." />
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)} className={s.input} type="text" placeholder="Введите описание..." />
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDate(event.target.value)} className={s.input} type="datetime-local" />
            <Lists list={list} onSelectListHandler={onSelectListHandler} />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default Form;

