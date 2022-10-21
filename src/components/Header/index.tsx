import React from 'react';
import { HeaderConteiner, TittleText, UserImage } from './styles';

const Header = (): JSX.Element => (
	<HeaderConteiner>
		<TittleText>CryptoTracker Pro</TittleText>
		<UserImage
			source={{
				uri: 'https://res.cloudinary.com/dwflhw6kg/image/upload/v1666027013/sample.jpg',
			}}
		/>
	</HeaderConteiner>
);
export default Header;
