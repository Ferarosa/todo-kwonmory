import React from 'react';
import TodoListLeftPanel from '../TodoListLeftPanel';
import TodoListRightPanel from '../TodoRightPanel';
import { Todos } from '../types';
import { Wrapper } from './styles';

const TodoListWrapper = () => {
	const todoList = [
		{
			id: 1,
			title: '투두 리스트 만들기',
			favorites: false,
			checked: true,
		},
		{
			id: 2,
			title: '투두 리스트 만들기2',
			favorites: false,
			checked: false,
		},
	] as Todos[];

	const handleState = (target: string) => {
		console.log(target);
	};

	const handleInsert = (value: string) => {
		console.log(value);
	};

	const handleRemove = (id: number) => {
		console.log(id);
	};

	const handleToggle = (id: number) => {
		console.log(id);
	};

	const user = {
		email: 'kwonmory@gmail.com',
	};

	return (
		<>
			<Wrapper>
				<TodoListLeftPanel todos={todoList} user={user} />
				<TodoListRightPanel
					todos={todoList}
					onChangeState={handleState}
					onInsert={handleInsert}
					onRemove={handleRemove}
					onToggle={handleToggle}
				/>
			</Wrapper>
		</>
	);
};

export default TodoListWrapper;
