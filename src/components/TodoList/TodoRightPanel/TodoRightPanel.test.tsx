import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TodoListRightPanel from '.';
import { Todos } from '../types';

describe('TodoListRightPanel', () => {
	describe('when has Todolist data', () => {
		it('renders 진행 수', () => {
			const todoList = [
				{
					id: 1,
					title: '투두 리스트 만들기',
					favorites: false,
					checked: false,
				},
				{
					id: 2,
					title: '투두 리스트 만들기2',
					favorites: false,
					checked: false,
				},
			] as Todos[];

			const handleChangeState = jest.fn();
			const handleInsert = jest.fn();

			const { getAllByText } = render(
				<TodoListRightPanel
					todos={todoList}
					onChangeState={handleChangeState}
					onInsert={handleInsert}
					onToggle={jest.fn()}
					onRemove={jest.fn()}
				/>,
			);

			expect(getAllByText(/투두 리스트 만들기/).length).toBe(2);
		});
	});
});
