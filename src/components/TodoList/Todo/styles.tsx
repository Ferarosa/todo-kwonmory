import styled from '@emotion/styled';

const Wrapper = styled.li`
	display: flex;
	justify-content: space-between;
	height: 2rem;

	div {
		display: flex;
		align-items: center;

		.favorites {
			margin-right: 0.2rem;

			svg {
				font-size: 1.2rem;
				color: #25e89b;
				cursor: pointer;
				animation: transform 0.2s;

				&:hover {
					transform: scale(1.2);
				}
			}
		}

		.check {
			svg {
				font-size: 1.5rem;
				color: #25e89b;
				cursor: pointer;
			}
		}

		.title {
			flex: 1;
			margin-left: 0.3rem;
			color: #333;
			font-size: 1rem;
			cursor: pointer;

			&.checked {
				text-decoration: line-through;
				opacity: 0.5;
			}
		}

		&:nth-of-type(2) {
			svg {
				color: #e92323;
				opacity: 0.7;
				cursor: pointer;
			}
		}
	}
`;

export { Wrapper };
