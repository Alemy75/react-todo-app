import React, {FC, useState} from 'react';
import s from './Form.module.scss';
import {useAppSelector} from "../hooks/hooks";
import { List } from '../models/todos.models';

const Form: FC = () => {
    const {lists} = useAppSelector(state => state.todos)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [list, setList] = useState(0)

    const onSelectListHandler = (id: number):void => {
        setList(id)
    }


    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)} className={s.input} type="text" placeholder="Введите название..."/>
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)} className={s.input} type="text" placeholder="Введите описание..."/>
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDate(event.target.value)} className={s.input} type="date"/>
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