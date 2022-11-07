import React, { useState } from 'react';
import {
  ConteinerData,
  Title,
  InputText,
  ButtonAdd,
  ButtonText,
} from './styles';
import { theme } from '../../utils/theme';
import { addCrypto } from '../../store/actions';
import { useAppSelector, useAppDispatch } from '../../Hooks/hooksState';
import { RootState } from '../../store/index';
import { Crypto } from '../../interface';

const CryptoLogic = ({ navigation }): JSX.Element => {
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState('');

  const dispatch = useAppDispatch();
  const cryptoCollection: Crypto[] = useAppSelector(
    (state: RootState) => state.cryptos.cryptos
  );
  const handleAddCrypto = (): void => {
    dispatch(addCrypto(search, cryptoCollection));
    setSearch('');
    navigation.navigate('Home');
  };
  const handleFocus = () => {
    setFocus(prev => !prev);
  };

  return (
    <ConteinerData>
      <Title>Add a Cryptocurrency</Title>
      <InputText
        placeholder="Use a name or ticker symbol..."
        placeholderTextColor={theme.greeyInputs}
        underlineColorAndroid="transparent"
        onFocus={handleFocus}
        onBlur={handleFocus}
        borderColor={focus ? theme.yellow : theme.greeyInputs}
        value={search}
        onChangeText={setSearch}
      />
      <ButtonAdd disabled={search.length < 0} onPress={handleAddCrypto}>
        <ButtonText value={search.length > 0}>Add</ButtonText>
      </ButtonAdd>
    </ConteinerData>
  );
};

export default CryptoLogic;
