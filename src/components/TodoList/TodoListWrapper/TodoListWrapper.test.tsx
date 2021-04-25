import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TodoListWrapper from '../TodoListWrapper';

describe('TodoListWrapper', () => {
	describe('when loaded', () => {
		test('renders "score" and "complete" title', () => {
			const { getByText } = render(<TodoListWrapper />);

			expect(getByText(/process/)).toBeInTheDocument();
			expect(getByText(/complete/)).toBeInTheDocument();
		});
	});
});
