import { FC, ReactChild, ReactNode } from 'react';

export enum CardVariant {
	outlined = 'outlied',
	primary = 'primary',
}

interface CardProps {
	width: string;
	height: string;
	children: ReactChild | ReactNode;
	variant?: CardVariant;
  padding: string;
	onclick?: () => any;
}

const Card: FC<CardProps> = ({ width, height, children, variant, onclick, padding }) => {
	return (
		<div
			style={{
				width,
				height,
				border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        padding
			}}
			onClick={onclick}
		>
			{children}
		</div>
	);
};

export default Card;
