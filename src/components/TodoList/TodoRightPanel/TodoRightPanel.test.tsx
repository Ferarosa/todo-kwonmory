import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TodoListRightPanel from '.';
import { Todos } from '../types';

describe('TodoListRightPanel', () => {
	let todos = [] as Todos[];
	let handleRemove = jest.fn();
	let handleToggle = jest.fn();
	let handleToggleFavorite = jest.fn();
	let handleInsert = jest.fn();

	beforeEach(() => {
		todos = [
			{
				id: '1',
				title: '투두 리스트 만들기',
				favorites: false,
				checked: false,
			},
			{
				id: '2',
				title: '투두 리스트 만들기2',
				favorites: false,
				checked: false,
			},
		];

		handleRemove = jest.fn();
		handleToggle = jest.fn();
		handleToggleFavorite = jest.fn();
		handleInsert = jest.fn();
	});

	describe('when has Todolist data', () => {
		it('renders 진행 수', () => {
			const { getAllByText } = render(
				<TodoListRightPanel
					todos={todos}
					onToggleFavorite={handleToggleFavorite}
					onInsert={handleInsert}
					onToggle={handleToggle}
					onRemove={handleRemove}
				/>,
			);

			expect(getAllByText(/투두 리스트 만들기/).length).toBe(2);
		});
	});
});
