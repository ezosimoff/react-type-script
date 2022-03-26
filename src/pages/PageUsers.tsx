import { FC, useEffect, useState } from 'react';
import { IUser } from '../types';
import axios from 'axios';
import List from '../components/List';
import UserItem from '../components/UserItem';

interface PageUsersProps {}

const PageUsers: FC<PageUsersProps> = () => {
	const [users, setUsers] = useState<IUser[]>([]);

	useEffect(() => {
		fetchUsers('https://jsonplaceholder.typicode.com/users');
	}, []);

	async function fetchUsers(url: string) {
		try {
			const response = await axios.get<IUser[]>(url);
			setUsers(response.data);
		} catch (error) {
			alert(error);
		}
	}
	return (
		<List
			items={users}
			renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
		/>
	);
};

export default PageUsers;
