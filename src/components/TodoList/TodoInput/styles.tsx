import styled from '@emotion/styled';

const Wrapper = styled.div`
	margin: 0.5rem 0;

	form {
		display: flex;
		padding: 0 0.5rem;

		input {
			margin: 0 0.2rem;
			background: none;
			outline: none;
			border: none;
			border-bottom: 0.2px solid #dee2e6;
			padding: 0.3rem;
			flex: 1;
			font-size: 1.1rem;
			line-height: 1.4;
			color: #333;

			&::placeholder {
				color: #dee2e6;
				font-size: 0.8rem;
			}
		}

		button {
			display: flex;
			justify-content: center;
			align-items: center;
			background: none;
			outline: none;
			border: 0.2px solid #dee2e6;
			border-radius: 0.4rem;
			font-size: 1.2rem;
			color: #25e89b;
			cursor: pointer;

			&:hover {
				background: #25e89b;
				color: #fff;
				border: 0.2px solid #25e89b;
			}
		}
	}
`;

export { Wrapper };
