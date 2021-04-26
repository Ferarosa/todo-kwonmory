import React from 'react';
import { Todos } from '../types';
import { Wrapper } from './styles';

import { MdDelete, MdStar, MdStarBorder, MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

type TodoType = {
	todo: Todos;
	onRemove: (id: string) => void;
	onToggle: (id: string) => void;
	onChangeState: (id: string) => void;
};

const Todo = ({ todo, onRemove, onToggle, onChangeState }: TodoType) => {
	const handleToggle = (e: React.MouseEvent<Element, MouseEvent>) => {
		e.preventDefault();
		onToggle(todo.id);
	};

	const handleRemove = (e: React.MouseEvent<Element, MouseEvent>) => {
		e.preventDefault();
		onRemove(todo.id);
	};

	const handleFavorite = (e: React.MouseEvent<Element, MouseEvent>) => {
		e.preventDefault();
		onChangeState(todo.id);
	};

	return (
		<Wrapper>
			<div>
				<span className="favorites" onClick={(e) => handleFavorite(e)}>
					{todo.favorites ? <MdStar /> : <MdStarBorder />}
				</span>
				<span className="check" onClick={(e) => handleToggle(e)}>
					{todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
				</span>
				<span className={'title ' + (todo.checked ? 'checked' : '')} onClick={(e) => handleToggle(e)}>
					{todo.title}
				</span>
			</div>

			<div>
				<span className="remove" onClick={(e) => handleRemove(e)}>
					<MdDelete />
				</span>
			</div>
		</Wrapper>
	);
};

export default Todo;
