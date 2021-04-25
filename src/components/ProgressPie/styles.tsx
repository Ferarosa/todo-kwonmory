import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicPie = (props: { turn: number }) => css`
	background: conic-gradient(#25e89b ${props.turn}turn, transparent 0deg);
`;

const Wrapper = styled.div`
	position: relative;
	display: inline-block;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	transition: 0.3s;

	.content {
		width: 6.5rem;
		height: 2.7rem;
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translate(-50%, -50%);

		h3 {
			margin-bottom: 0.3rem;
			text-align: center;
			text-transform: capitalize;
		}

		p {
			font-size: 2rem;
			color: #25e89b;
			text-align: center;
		}
	}

	& .depth-1 {
		background-color: transparent;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 50%;
		position: absolute;
		top: 0;
		left: 0;
		width: 150px;
		height: 150px;

		& .pie {
			top: 50%;
			left: 50%;
			border-radius: 50%;
			transform: translate(-50%, -50%);
		}

		& .depth-2 {
			background: #152d66;
			position: absolute;
			width: 125px;
			height: 125px;
			z-index: 2;
		}

		& .depth-percentage {
			${dynamicPie}
			position: relative;
			width: 140px;
			height: 140px;
		}
	}
`;

export { Wrapper };
