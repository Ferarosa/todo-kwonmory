import React, { FC } from 'react';
import BaseLayouts from '@layouts/BaseLayouts';
import TodoListWrapper from '@components/TodoList/TodoListWrapper';

const TodoListPage: FC = () => (
	<>
		<BaseLayouts>
			<TodoListWrapper />
		</BaseLayouts>
	</>
);

export default TodoListPage;
