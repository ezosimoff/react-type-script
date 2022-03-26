import { FC, useState, ChangeEvent, MouseEvent, useRef } from 'react';

const Events: FC = () => {
	const [value, setValue] = useState('');
	const [show, setShow] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setShow(true);
	};
	return (
		<>
			<input
				type='text'
				value={value}
				onChange={handleChange}
				placeholder='Управляемый'
			/>
			<input
				type='text'
				ref={inputRef}
				placeholder='Неуправляемый'
			/>
			<button onClick={handleClick}>вывести результат</button>
			{show && <span>вы ввели: {value}</span>}
		</>
	);
};

export default Events;
