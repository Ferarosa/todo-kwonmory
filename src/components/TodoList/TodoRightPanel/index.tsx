import React, { useCallback, useState } from 'react';
import TodoCategories from '../TodoCategories';
import TodoInput from '@components/TodoList/TodoInput';
import TodoLists from '@components/TodoList/TodoLists';
import { Todos } from '@components/TodoList/types';
import { Wrapper } from './styles';

type TodoListRightPanelType = {
	todos: Todos[];
	onToggleFavorite: (value: string) => void;
	onInsert: (value: string) => void;
	onToggle: (id: string) => void;
	onRemove: (id: string) => void;
};

const TodoListRightPanel = ({ todos, onToggleFavorite, onInsert, onRemove, onToggle }: TodoListRightPanelType) => {
	const [viewFavorites, setViewFavorites] = useState(false);

	const handleChangeCategories = useCallback((e) => {
		if (e === 'favorites') {
			setViewFavorites(true);
		} else {
			setViewFavorites(false);
		}
	}, []);

	return (
		<>
			<Wrapper>
				<TodoInput onInsert={onInsert} />
				<TodoCategories onChangeCategories={handleChangeCategories} viewFavorites={viewFavorites} />
				<TodoLists
					todos={todos}
					viewFavorites={viewFavorites}
					onRemove={onRemove}
					onToggle={onToggle}
					onToggleFavorite={onToggleFavorite}
				/>
			</Wrapper>
		</>
	);
};

export default TodoListRightPanel;
