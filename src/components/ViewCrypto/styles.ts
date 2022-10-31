import Styled from 'styled-components/native';
import { theme } from '../../utils/theme';

export const ViewConteiner = Styled.View`
  flex-direction: row;
  justyfy-items: center;
  padding-bottom: 35px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${theme.greey};
  margin: 15px 35px;
`;

export const LogoCrypto = Styled.Image`
  width: 60px;
  height: 60px;
  top: 3px;
`;

export const DataConteiner = Styled.View`
  flex: 2;
  padding: 8px 0px 0px 10px;
  justify-content: center;
`;

export const Data = Styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextTitle = Styled.Text`
  color: ${theme.black};
  font-size: 17px;
  font-weight: 600;
`;

export const ChangeText = Styled.Text`
  color: ${theme.black};
  font-size: 14px;
  font-weight: 500;
  color: ${(props: { value: number }) =>
    props.value > 0 ? `${theme.green}` : `${theme.red}`};
`;

export const CodeCrypto = Styled.Text`
  color: ${theme.greey};
`;

export const ChangeContainer = Styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ImgArrow = Styled.Image`
  width: 15px;
  height: 15px;
  margin-top: 3.5px;
`;
