import React, { useEffect, useState } from 'react';
import { Wrapper } from './styles';

type ProgressPieType = {
	persentage: number;
};

const ProgressPie = ({ persentage }: ProgressPieType) => {
	const [turn, setTurn] = useState(0);

	useEffect(() => {
		if (persentage === 0) setTurn(0);
		else setTurn(persentage / 100);
	}, [persentage, setTurn]);

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
