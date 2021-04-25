import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProgressPie from '../ProgressPie';

describe('ProgressPie', () => {
	it('renders efficiency and Persentage', () => {
		const { getByText } = render(<ProgressPie persentage={40} />);

		expect(getByText(/40/)).toBeInTheDocument();
		expect(getByText(/efficiency/)).toBeInTheDocument();
	});
});
