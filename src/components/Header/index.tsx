import React from 'react';
import { HeaderContainer, TittleText, UserImage } from './styles';

const Header = (): JSX.Element => (
	<HeaderContainer>
		<TittleText>CryptoTracker Pro</TittleText>
		<UserImage
			source={{
				uri: 'https://res.cloudinary.com/dwflhw6kg/image/upload/v1666027013/sample.jpg',
			}}
		/>
	</HeaderContainer>
);
export default Header;
