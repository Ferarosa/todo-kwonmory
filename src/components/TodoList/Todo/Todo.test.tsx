import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todo from '.';

describe('Todo', () => {
	it('renders title', () => {
		const todo = {
			id: 1,
			title: '밥 먹기',
			favorites: false,
			checked: false,
		};
		const handleRemove = jest.fn();

		const { getByText } = render(<Todo todo={todo} onRemove={handleRemove} onToggle={jest.fn()} />);

		expect(getByText('밥 먹기')).toBeInTheDocument();
	});

	it('can toggle item', () => {
		const todo = {
			id: 1,
			title: '밥 먹기',
			favorites: false,
			checked: false,
		};

		const handleRemove = jest.fn();
		const handleToggle = jest.fn();

		const { container, getByText } = render(<Todo todo={todo} onRemove={handleRemove} onToggle={handleToggle} />);

		const RemoveButton = container.querySelector('svg') as Element;

		expect(getByText(/밥 먹기/)).toBeInTheDocument();

		fireEvent.click(RemoveButton);

		expect(handleRemove).toBeCalled();
	});

	it('can edit item', () => {});

	it('can check item', () => {
		const todo = {
			id: 1,
			title: '밥 먹기',
			favorites: false,
			checked: false,
		};

		const handleRemove = jest.fn();
		const handleToggle = jest.fn();

		const { getByText } = render(<Todo todo={todo} onRemove={handleRemove} onToggle={handleToggle} />);

		expect(getByText(/밥 먹기/)).toBeInTheDocument();

		fireEvent.click(getByText(/밥 먹기/));

		expect(handleToggle).toBeCalled();
	});
});
