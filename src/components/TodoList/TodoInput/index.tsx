import React, { useCallback, useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import { Wrapper } from './styles';

type TodoInputType = {
	onInsert: (todo: string) => void;
};

const TodoInput = ({ onInsert }: TodoInputType) => {
	const [value, setValue] = useState('');

	const onChange = useCallback((e) => {
		setValue(e.target.value);
	}, []);

	const onSubmit = useCallback(
		(e) => {
			onInsert(value);
			setValue('');
			e.preventDefault();
		},
		[onInsert, value],
	);

	return (
		<>
			<Wrapper>
				<form onSubmit={onSubmit}>
					<input placeholder="할 일 입력해라" value={value} onChange={onChange} />
					<button type="submit">
						<MdModeEdit />
					</button>
				</form>
			</Wrapper>
		</>
	);
};

export default TodoInput;
