import React, { FC } from 'react';
import { Wrapper } from './styles';

const BaseLayouts: FC = ({ children }) => {
	return (
		<>
			<Wrapper>{children}</Wrapper>
		</>
	);
};

export default BaseLayouts;
