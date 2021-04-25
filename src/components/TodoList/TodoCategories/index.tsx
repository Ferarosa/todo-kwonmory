import React from 'react';
import { Wrapper } from './styles';

type TodoCategoriesType = {
	onChangeState: (target: string) => void;
};

const TodoCategories = ({ onChangeState }: TodoCategoriesType) => {
	return (
		<>
			<Wrapper>
				<button onClick={() => onChangeState('list')} className="active">
					list
				</button>
				<div></div>
				<button onClick={() => onChangeState('favorites')}>favorites</button>
			</Wrapper>
		</>
	);
};

export default TodoCategories;
