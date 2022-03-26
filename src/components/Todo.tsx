import { FC } from 'react';
import { ITodo } from '../types';

interface TodoProps {
	todo: ITodo;
}

const Todo: FC<TodoProps> = ({ todo }) => {
	
	const handeChange = () => {}
	return (
		<div
			style={{
				border: '1px solid lightgray',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
            <span>#{todo.id}</span>
            <span>{todo.title}</span>
            <input type="checkbox" checked={todo.completed} onChange={handeChange}/>

        </div>
	);
};

export default Todo;
