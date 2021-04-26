import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Todos } from '../types';
import TodoLists from '.';

describe('TodoLists', () => {
	let todoList = [] as Todos[];

	beforeEach(() => {
		todoList = [
			{
				id: '1',
				title: '밥 먹기',
				favorites: false,
				checked: false,
			},
			{
				id: '2',
				title: '공부 하기',
				favorites: false,
				checked: false,
			},
		];
	});
	describe('when have todo list data', () => {
		it('renders todo items', () => {
			const { getByText } = render(<TodoLists todos={todoList} onRemove={jest.fn()} onToggle={jest.fn()} />);

			expect(getByText(/밥 먹기/)).toBeInTheDocument();
			expect(getByText(/공부 하기/)).toBeInTheDocument();
		});
	});
});
