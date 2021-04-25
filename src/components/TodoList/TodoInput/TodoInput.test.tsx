import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoInput from '.';
describe('TodoInput', () => {
	describe('when click add button', () => {
		it('emit list add event', () => {
			const handleClick = jest.fn();

			const { getByPlaceholderText, container } = render(<TodoInput onInsert={handleClick} />);

			fireEvent.change(getByPlaceholderText('할 일 입력해라'), {
				target: {
					value: '오늘도 화이팅',
				},
			});

			const buttonElement = container.querySelector('button[type="submit"]') as Element;

			const InputElement = container.querySelector('input') as HTMLInputElement;

			expect(InputElement.value).toBe('오늘도 화이팅');

			fireEvent.click(buttonElement);

			expect(handleClick).toBeCalled();

			expect(InputElement.value).not.toContain('오늘도 화이팅');
		});
	});
});
