import React from 'react';
import { Todos } from '../types';
import { Wrapper } from './styles';

import { MdHighlightOff } from 'react-icons/md';

type TodoType = {
	todo: Todos;
	onRemove: (id: number) => void;
	onToggle: (id: number) => void;
};

const Todo = ({ todo, onRemove, onToggle }: TodoType) => {
	return (
		<Wrapper
			onClick={(e) => {
				e.preventDefault();
				onToggle(todo.id);
			}}
		>
			<span>{todo.title}</span>
			<MdHighlightOff
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					onRemove(todo.id);
				}}
			/>
		</Wrapper>
	);
};

export default Todo;
