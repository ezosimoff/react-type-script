import { FunctionComponent } from 'react';
import { IUser } from '../types';

interface UserItemProps {
	user: IUser;
}

const UserItem: FunctionComponent<UserItemProps> = ({ user }) => {
	return (
		<div style={{padding:'10px', border:'1px solid lightgray'}}>
			{user.id}. {user.name} проживает в городе {user.address.city}
			на улице {user.address.street}
		</div>
	);
};

export default UserItem;
