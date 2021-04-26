import React, { useCallback, useState } from 'react';
import TodoListLeftPanel from '../TodoListLeftPanel';
import TodoListRightPanel from '../TodoRightPanel';
import { Wrapper } from './styles';
import { v4 as uuidv4 } from 'uuid';
import { Todos } from '../types';

const TodoListWrapper = () => {
	const [todoList, setTodoList] = useState([] as Todos[]);

	const handleToggleFavorite = useCallback(
		(id: string) => {
			setTodoList([
				...todoList.map((todo) => {
					if (todo.id === id) {
						todo.favorites = !todo.favorites;
					}

					return todo;
				}),
			]);
		},
		[todoList],
	);

	const handleInsert = useCallback(
		(value: string) => {
			setTodoList([
				...todoList,
				{
					id: uuidv4(),
					title: value,
					favorites: false,
					checked: false,
				},
			]);
		},
		[todoList],
	);

	const handleRemove = useCallback(
		(id: string) => {
			setTodoList([...todoList.filter((todo) => todo.id !== id)]);
		},
		[todoList],
	);

	const handleToggle = useCallback(
		(id: string) => {
			setTodoList([
				...todoList.map((todo) => {
					if (todo.id === id) {
						todo.checked = !todo.checked;
					}

					return todo;
				}),
			]);
		},
		[todoList],
	);

	const user = {
		email: 'kwonmory@gmail.com',
	};

	return (
		<>
			<Wrapper>
				<TodoListLeftPanel todos={todoList} user={user} />
				<TodoListRightPanel
					todos={todoList}
					onToggleFavorite={handleToggleFavorite}
					onInsert={handleInsert}
					onRemove={handleRemove}
					onToggle={handleToggle}
				/>
			</Wrapper>
		</>
	);
};

export default TodoListWrapper;
