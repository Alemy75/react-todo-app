import { useState } from 'react';
import { List } from '../models/todos.models';
import { useGetListsQuery } from '../store/todo/todos.api';
import s from './Form.module.scss';

interface ILists {
	list: number
	onSelectListHandler(id: number): void
}

const Lists: React.FC<ILists> = ({list, onSelectListHandler}) => {
	
	const { data: lists } = useGetListsQuery('')



	return (
		<div className={s.items}>
			{
				lists?.map((item: List) =>
					<div
						className={s.item}
						key={item.id}
						style={
							list === item.id 
								? { background: '#ffd500', width: "20%" } 
								: { background: item.color + "40", width: "20%" }
						}
						onClick={() => onSelectListHandler(item.id)}
					>
						{item.name}
					</div>)
			}
		</div>
	)
}

export default Lists