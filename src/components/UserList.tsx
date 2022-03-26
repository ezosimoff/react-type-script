import React, { FunctionComponent } from 'react';
import { IUser } from '../types';
import UserItem from './UserItem';

interface UserListProps {
	users: IUser[];
}

const UserList: FunctionComponent<UserListProps> = ({ users }) => {
	return (
		<>
			{users.map((user) => (
        <UserItem user={user} key={user.id}/>
			))}
		</>
	);
};

export default UserList;
