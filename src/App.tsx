import { FC } from 'react';
import Card, { CardVariant } from './components/Card';
import Events from './components/Events';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import PageUsers from './pages/PageUsers';
import PageTodo from './pages/PageTodo';

interface AppProps {}

const App: FC<AppProps> = () => {
	return (
		<>
			<Card
				width='50%'
				height='auto'
				padding='15px'
				variant={CardVariant.outlined}
			>
				<Events />
			</Card>
			<BrowserRouter>
				<Card
					width='50%'
					height='auto'
					padding='15px'
					variant={CardVariant.outlined}
				>
					<Link to={'/'}> Домой </Link>
					<Link to={'/todos'}> Тудушки </Link>
					<Link to={'/users'}> Юзеры </Link>
				</Card>
				<Routes>
					{/* <Route path='/'/> */}
					<Route path='/users' element={<PageUsers />} />
					<Route path='/todos' element={<PageTodo />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
