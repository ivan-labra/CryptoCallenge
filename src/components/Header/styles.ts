import Styled from 'styled-components/native';
import { theme } from '../../utils/theme';

export const HeaderContainer = Styled.View`
  width: 97%;
  flex-direction: row;
  padding-horizontal: 18px;
  padding-vertical: 42px;
  align-items: center;
  justify-content: space-between;
`;

export const TittleText = Styled.Text`
  color: ${theme.white};
  font-size: 24px;
  font-weight: 700;
  left: -10%;
`;

export const UserImage = Styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;
