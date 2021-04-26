import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TodoCategories from './';

describe('TodoCategories', () => {
	it('renders "list" and "favorites"', () => {
		const handleClick = jest.fn();

		const { getByText } = render(<TodoCategories onChangeCategories={handleClick} viewFavorites={false} />);

		expect(getByText(/list/)).toBeInTheDocument();
		expect(getByText(/favorites/)).toBeInTheDocument();
	});

	describe('when click "list"', () => {
		it('renders all todo list', () => {
			const handleClick = jest.fn();

			const { getByText } = render(<TodoCategories onChangeCategories={handleClick} viewFavorites={false} />);

			fireEvent.click(getByText(/list/));

			expect(handleClick).toBeCalledWith('list');
		});
	});

	describe('when click "favorites"', () => {
		it('redners favorites list', () => {
			const handleClick = jest.fn();

			const { getByText } = render(<TodoCategories onChangeCategories={handleClick} viewFavorites={false} />);

			fireEvent.click(getByText(/favorites/));

			expect(handleClick).toBeCalledWith('favorites');
		});
	});
});
