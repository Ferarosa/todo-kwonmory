import React from 'react';
import Todo from '../Todo';
import { Todos } from '../types';
import { Empty, Wrapper } from './styles';

type TodoListsType = {
	todos: Todos[];
	onRemove: (id: string) => void;
	onToggle: (id: string) => void;
	onChangeState: (id: string) => void;
};

const TodoLists = ({ todos, onRemove, onToggle, onChangeState }: TodoListsType) => {
	const todoList = todos.map((todo) => (
		<Todo todo={todo} key={`todo-${todo.id}`} onRemove={onRemove} onToggle={onToggle} onChangeState={onChangeState} />
	));

	if (todos.length === 0) {
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
