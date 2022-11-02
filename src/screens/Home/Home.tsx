import React, { useEffect } from 'react';
import { BtnAdd, TextBtn, CryptoList } from './styles';
import { SafeAreaView } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../Hooks/hooksState';
import ViewCrypto from '../../components/ViewCrypto';
import { RootState } from '../../store';
import { Crypto } from '../../interface';
import { addCryptos } from '../../store/actions';

const Home = (): JSX.Element => {
  const dataCryptos: Crypto[] = useAppSelector(
    (state: RootState) => state.cryptos.cryptos
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addCryptos());
  }, []);

  const renderItem = ({ item }) => <ViewCrypto item={item} />;
  return (
    <SafeAreaView>
      <CryptoList
        data={dataCryptos}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
      />
      <BtnAdd>
        <TextBtn> + Add a Cryptocurrency </TextBtn>
      </BtnAdd>
    </SafeAreaView>
  );
};

export default Home;
