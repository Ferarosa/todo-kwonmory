import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todo from '.';
import { Todos } from '../types';

describe('Todo', () => {
	let todo = {} as Todos;
	let handleRemove = jest.fn();
	let handleToggle = jest.fn();

	beforeEach(() => {
		todo = {
			id: '1',
			title: '밥 먹기',
			favorites: false,
			checked: false,
		};

		handleRemove = jest.fn();
		handleToggle = jest.fn();
	});

	it('renders title', () => {
		const { getByText } = render(<Todo todo={todo} onRemove={handleRemove} onToggle={jest.fn()} />);

		expect(getByText('밥 먹기')).toBeInTheDocument();
	});

	it('can toggle item', () => {
		const { container, getByText } = render(<Todo todo={todo} onRemove={handleRemove} onToggle={handleToggle} />);

		const RemoveButton = container.querySelector('.remove') as Element;

		expect(getByText(/밥 먹기/)).toBeInTheDocument();

		fireEvent.click(RemoveButton);

		expect(handleRemove).toBeCalled();
	});

	it('can edit item', () => {});

	it('can check item', () => {
		const { getByText, container } = render(<Todo todo={todo} onRemove={handleRemove} onToggle={handleToggle} />);

		expect(getByText(/밥 먹기/)).toBeInTheDocument();

		const checkElement = container.querySelector('.check') as Element;

		fireEvent.click(getByText(/밥 먹기/));
		fireEvent.click(checkElement);

		expect(handleToggle).toBeCalledTimes(2);
	});
});
