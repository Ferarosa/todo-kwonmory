import styled from '@emotion/styled';

const Wrapper = styled.div`
	width: 20rem;
	height: 32rem;
	position: absolute;
	left: 0;
	transform: translateY(-1rem);
	box-sizing: content-box;
	background-color: #09132b;
	background: linear-gradient(#09132b, #152c63);
	box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.2);
	border-radius: 0.4rem;
	color: #d2f7f3;

	& section {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Profile = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 2rem;

	& > section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		img {
			width: 5rem;
			height: 5rem;
			text-align: center;
			border-radius: 1.5rem;
			margin-bottom: 1rem;
		}

		span {
			text-align: center;
			font-size: 0.7rem;
			opacity: 0.7;
		}
	}
`;

const Summary = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2rem 0;

	ul {
		display: flex;
		list-style-type: none;

		li {
			margin: 0 1rem;

			h3 {
				text-align: center;
				text-transform: uppercase;
			}

			p {
				margin-top: 0.5rem;
				text-align: center;
				font-size: 2rem;
				color: #25e89b;
			}

			&:first-of-type {
				position: relative;

				&::after {
					position: absolute;
					content: '';
					top: 14px;
					right: -18px;
					height: 32px;
					border: 0.5px solid #fff;
					opacity: 0.1;
				}
			}
		}
	}
`;

export { Wrapper, Profile, Summary };
