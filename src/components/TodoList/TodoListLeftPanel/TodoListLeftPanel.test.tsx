import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TodoListLeftPanel from '.';
import { Todos } from '../types';

describe('TodoListLeftPanel', () => {
	it('has 진행 and 완료', () => {
		const { getByText } = render(<TodoListLeftPanel todos={[]} user={{ email: '' }} />);

		expect(getByText(/process/)).toBeInTheDocument();
		expect(getByText(/complete/)).toBeInTheDocument();
	});

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
					progess: 0,
				},
			] as Todos[];

			const { getByText } = render(<TodoListLeftPanel todos={todoList} user={{ email: '' }} />);

			expect(getByText(/2/)).toBeInTheDocument();
		});

		it('renders 완료 개수', () => {
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
				{
					id: 3,
					title: '투두 리스트 만들기3',
					favorites: false,
					checked: false,
				},
			] as Todos[];

			const { getByText } = render(<TodoListLeftPanel todos={todoList} user={{ email: '' }} />);

			expect(getByText(/1/)).toBeInTheDocument();
		});
	});

	describe('when has email', () => {
		it('renders profile image', () => {
			const user = { email: 'kwonmory@gmail.com' };

			const { getByAltText } = render(<TodoListLeftPanel todos={[]} user={user} />);

			expect(getByAltText('프로필 이미지')).toBeDefined();
		});
	});
});
