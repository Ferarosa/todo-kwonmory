import React from 'react';
import TodoCategories from '../TodoCategories';
import TodoInput from '@components/TodoList/TodoInput';
import TodoLists from '@components/TodoList/TodoLists';
import { Todos } from '@components/TodoList/types';
import { Wrapper } from './styles';

type TodoListRightPanelType = {
	todos: Todos[];
	onChangeState: (value: string) => void;
	onInsert: (value: string) => void;
	onToggle: (id: number) => void;
	onRemove: (id: number) => void;
};

const TodoListRightPanel = ({ todos, onChangeState, onInsert, onRemove, onToggle }: TodoListRightPanelType) => {
	return (
		<>
			<Wrapper>
				<TodoInput onInsert={onInsert} />
				<TodoCategories onChangeState={onChangeState} />
				<TodoLists todos={todos} onRemove={onRemove} onToggle={onToggle} />
			</Wrapper>
		</>
	);
};

export default TodoListRightPanel;
