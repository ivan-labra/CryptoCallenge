import Styled from 'styled-components/native';
import {theme} from '../../utils/theme';

export const CryptoList = Styled.FlatList`
    padding-vertical:25px
`;

export const TextBtn = Styled.Text`
    color:${theme.blueLink};
    font-size: 19px;
    font-weight: 400;
`;

export const BtnAdd = Styled.TouchableOpacity`
    top:5px;
    margin: auto
`;
