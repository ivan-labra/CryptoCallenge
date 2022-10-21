import Styled from 'styled-components/native';
import { theme } from '../../utils/theme';

export const HeaderContainer = Styled.View`
    width: 95%;
    flex-direction: row;
    padding-horizontal:18px;
    padding-vertical:42px;
    align-items: center;
`;

export const TittleText = Styled.Text`
    color: ${theme.white};
    font-size: 24px;
    font-weight: 700;
    left: -35%
`;

export const UserImage = Styled.Image`
    width: 50px;
    height: 50px;
    left:186%;
    border-radius:100px;
`;
