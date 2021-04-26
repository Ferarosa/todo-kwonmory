import React, { useState } from 'react';
import { Profile, Wrapper, Summary } from './styles';
import { Todos, User } from '../types';
import ProgressPie from '@components/ProgressPie';

type TodoListLeftPanelType = {
	todos: Todos[];
	user: User;
};

const TodoListLeftPanel = ({ todos, user }: TodoListLeftPanelType) => {
	const [completeCount] = useState(
		todos.reduce((acc, todo) => {
			if (todo.checked) acc += 1;
			return acc;
		}, 0),
	);

	const [inProcessCount] = useState(todos.length - completeCount);
	const [efficiency] = useState((inProcessCount / todos.length) * 100);

	return (
		<>
			<Wrapper>
				<section>
					<Profile>
						<section>
							<img src="https://avatars.githubusercontent.com/u/12936720?v=4" alt="프로필 이미지" />
							<span>{user.email}</span>
						</section>
					</Profile>
				</section>

				<section>
					<Summary>
						<ul>
							<li>
								<h3>in process</h3>
								<p>{inProcessCount}</p>
							</li>
							<li>
								<h3>complete</h3>
								<p>{completeCount}</p>
							</li>
						</ul>
					</Summary>
				</section>

				<section>
					<ProgressPie persentage={efficiency} />
				</section>
			</Wrapper>
		</>
	);
};

export default TodoListLeftPanel;
