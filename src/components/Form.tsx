import React, {FC} from 'react';
import s from './Form.module.scss';


const Form = () => {
    return (
        <form action="">
            <input className={s.input} type="text" placeholder="Введите название..."/>
            <input className={s.input} type="text" placeholder="Введите описание..."/>
            <input className={s.input} type="date"/>
            <div className={s.input}>
                <label htmlFor="">Выполнено</label>
                <input type="checkbox"/>
            </div>
            <select className={s.input}>
                <option value="">Категория</option>
                <option value="">Категория</option>
                <option value="">Категория</option>
            </select>
            <button>Добавить</button>
        </form>
    );
};

export default Form;