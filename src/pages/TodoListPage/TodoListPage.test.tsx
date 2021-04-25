import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TodoListPage from '@pages/TodoListPage';

describe('TodoListPage', () => {
	it('renders leftPanel', () => {
		const { getByText } = render(<TodoListPage />);

		expect(getByText(/process/)).toBeInTheDocument();
		expect(getByText(/complete/)).toBeInTheDocument();
	});
});
