import { FC } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types';

interface AppProps {}

const App: FC<AppProps> = () => {
	const users: IUser[] = [
		{
			id: 1,
			name: 'Leanne Graham',
			email: 'Sincere@april.biz',
			address: {
				street: 'Kulas Light',
				city: 'Gwenborough',
				zipcode: '92998-3874',
			},
		},
		{
			id: 2,
			name: 'Ervin Howell',
			email: 'Shanna@melissa.tv',
			address: {
				street: 'Victor Plains',
				city: 'Wisokyburgh',
				zipcode: '90566-7771',
			},
		},
	];

	return (
		<div>
			<Card
				width='50%'
				height='50px'
				variant={CardVariant.outlined}
				onclick={() => console.log('clicked')}
			>
				<UserList users={users} />
			</Card>
		</div>
	);
};

export default App;
