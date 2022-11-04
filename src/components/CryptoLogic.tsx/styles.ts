import Styled from 'styled-components/native';
import { theme } from '../../utils/theme';

export const ConteinerData = Styled.View`
  flex-basis: 65%
`;

export const Title = Styled.Text`
  color: ${theme.black};
  font-size: 27px;
  font-weight: 700;
  align-self: flex-start;
`;

export const InputText = Styled.TextInput`
  height: 70px;
  border-width: 1px;
  margin-bottom: 18px;
  color: ${theme.black};
  font-size: 17px;
  border-radius: 5px;
  margin-top: 18px;
`;

export const ButtonAdd = Styled.TouchableOpacity`
  align-self: flex-end;
  padding-vertical: 15px;
  padding-horizontal: 70px;
  border-radius: 5px;
  background-color: ${theme.yellow};
`;

export const ButtonText = Styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${props => (props.value > 0 ? theme.greey : theme.greeyDisabled)}
`;
