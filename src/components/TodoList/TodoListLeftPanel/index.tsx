import React, { useEffect, useState } from 'react';
import { Profile, Wrapper, Summary } from './styles';
import { Todos, User } from '../types';
import ProgressPie from '@components/ProgressPie';

type TodoListLeftPanelType = {
	todos: Todos[];
	user: User;
};

const TodoListLeftPanel = ({ todos, user }: TodoListLeftPanelType) => {
	const [completeCount, setCompleteCount] = useState(0);
	const [inProcessCount, setInProcessCount] = useState(0);
	const [efficiency, setEfficiency] = useState(0);

	useEffect(() => {
		setCompleteCount(
			todos.reduce((acc, todo) => {
				if (todo.checked) acc += 1;
				return acc;
			}, 0),
		);

		setInProcessCount(todos.length ? todos.length - completeCount : 0);
		setEfficiency(todos.length ? Math.floor((completeCount / todos.length) * 100) : 0);
	}, [todos, completeCount, inProcessCount]);

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
