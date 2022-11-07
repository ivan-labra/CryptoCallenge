import React from 'react';
import CryptoLogic from '../../components/CryptoLogic.tsx/CryptoLogic.tsx';
import { ConteinerAddCrypto, ButtonBack } from './styles';

const AddCrypto = ({ navigation }) => (
  <ConteinerAddCrypto>
    <ButtonBack onPress={() => navigation.navigate('Home')}>
      {'< Back to list'}
    </ButtonBack>
    <CryptoLogic navigation={navigation} />
  </ConteinerAddCrypto>
);

export default AddCrypto;
