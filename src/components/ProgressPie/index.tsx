import React, { useState } from 'react';
import { Wrapper } from './styles';

type ProgressPieType = {
	persentage: number;
};

const ProgressPie = ({ persentage }: ProgressPieType) => {
	const [turn] = useState(persentage / 100);

	return (
		<>
			<Wrapper turn={turn}>
				<div className="depth-1">
					<div className="pie depth-2">
						<div className="content">
							<h3>efficiency</h3>
							<p>{persentage}%</p>
						</div>
					</div>
					<div className="pie depth-percentage"></div>
				</div>
			</Wrapper>
		</>
	);
};

export default ProgressPie;
