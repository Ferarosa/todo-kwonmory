import React from 'react';
import Todo from '../Todo';
import { Todos } from '../types';
import { Empty, Wrapper } from './styles';

type TodoListsType = {
	todos: Todos[];
	onRemove: (id: string) => void;
	onToggle: (id: string) => void;
	onToggleFavorite: (id: string) => void;
	viewFavorites: boolean;
};

const TodoLists = ({ todos, onRemove, onToggle, onToggleFavorite, viewFavorites }: TodoListsType) => {
	const todoList = todos
		.filter((todo) => {
			if (viewFavorites) return todo.favorites;
			else return true;
		})
		.map((todo) => (
			<Todo
				todo={todo}
				key={`todo-${todo.id}`}
				onRemove={onRemove}
				onToggle={onToggle}
				onToggleFavorite={onToggleFavorite}
			/>
		));

	if (todoList.length === 0) {
		return (
			<Empty>
				<span className="empty">리스트가 없습니다.</span>
			</Empty>
		);
	}

	return (
		<Wrapper>
			<ul>{todoList}</ul>
		</Wrapper>
	);
};

export default TodoLists;
