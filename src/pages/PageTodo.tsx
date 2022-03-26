import { FC, useEffect, useState } from 'react';
import List from '../components/List';
import Todo from '../components/Todo';
import { ITodo } from '../types';
import axios from 'axios';
interface PageTodoProps {}

const PageTodo: FC<PageTodoProps> = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
		fetchTodos('https://jsonplaceholder.typicode.com/todos?_limit=10');
	}, []);

    async function fetchTodos(url: string) {
		try {
			const response = await axios.get<ITodo[]>(url);
			setTodos(response.data);
		} catch (error) {
			alert(error);
		}
	}

	return (
		<List
			items={todos}
			renderItem={(todo: ITodo) => <Todo todo={todo} key={todo.id} />}
		/>
	);
};

export default PageTodo;
