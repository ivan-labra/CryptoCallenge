import Styled from 'styled-components/native';
import { theme } from '../../utils/theme';

export const ConteinerAddCrypto = Styled.View`
  flex: 1;
  background-color: ${theme.white}
  justify-content: space-between;
  padding: 40px 20px;
`;

export const ButtonBack = Styled.Text`
  font-size: 20px;
  font-weight: 400;
  color: ${theme.blueLink};
`;
