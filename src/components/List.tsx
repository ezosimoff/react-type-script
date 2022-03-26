import { FunctionComponent, ReactNode } from 'react';

interface ListProps<T> {
	items: T[];
	renderItem: (item: T) => ReactNode;
}

export default function List<T>(props: ListProps<T>) {
	return <>{props.items.map(props.renderItem)}</>;
}
