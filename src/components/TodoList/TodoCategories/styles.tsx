import styled from '@emotion/styled';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding: 1rem 0;

	& > div {
		border: 0.1px solid #333;
		opacity: 0.1;

		border-radius: 0.5rem;
		height: 1rem;
	}

	button {
		width: 7rem;
		outline: none;
		border: none;
		position: relative;
		color: #333;
		opacity: 0.1;
		font-weight: 600;
		background-color: transparent;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		cursor: pointer;
		transition: opacity 0.5s;

		&:hover {
			opacity: 1;
		}

		&.active {
			opacity: 1;
			color: #333;
		}
	}
`;

export { Wrapper };
