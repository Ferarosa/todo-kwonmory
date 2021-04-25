import React from 'react';
import Todo from '../Todo';
import { Todos } from '../types';
import { Wrapper } from './styles';

type TodoListsType = {
	todos: Todos[];
	onRemove: (id: number) => void;
	onToggle: (id: number) => void;
};

const TodoLists = ({ todos, onRemove, onToggle }: TodoListsType) => {
	return (
		<Wrapper>
			<ul>
				{todos.map((todo) => (
					<Todo todo={todo} key={`todo-${todo.id}`} onRemove={onRemove} onToggle={onToggle} />
				))}
			</ul>
		</Wrapper>
	);
};

export default TodoLists;
