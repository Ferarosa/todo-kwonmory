import React from 'react';
import { Wrapper } from './styles';

type TodoCategoriesType = {
	onChangeCategories: (target: string) => void;
	viewFavorites: boolean;
};

const TodoCategories = ({ onChangeCategories, viewFavorites }: TodoCategoriesType) => {
	return (
		<>
			<Wrapper>
				<button onClick={() => onChangeCategories('list')} className={!viewFavorites ? 'active' : ''}>
					list
				</button>
				<div></div>
				<button onClick={() => onChangeCategories('favorites')} className={viewFavorites ? 'active' : ''}>
					favorites
				</button>
			</Wrapper>
		</>
	);
};

export default TodoCategories;
