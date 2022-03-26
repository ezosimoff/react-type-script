import { FunctionComponent } from 'react';
import { IUser } from '../types';

interface UserItemProps {
	user: IUser;
}

const UserItem: FunctionComponent<UserItemProps> = ({ user }) => {
	return (
		<div>
			{user.id}. {user.name} проживает в городе {user.address.city}
			на улице {user.address.street}
		</div>
	);
};

export default UserItem;
