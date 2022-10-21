import React from 'react';
import { BtnAdd, TextBtn, CryptoList } from './styles';
import { SafeAreaView } from 'react-native';
import { useAppSelector } from '../../Hooks/hooksState';
import ViewCrypto from '../../components/ViewCrypto';
import { RootState } from '../../store';
import { Crypto } from '../../interface';

const Home = (): JSX.Element => {
  const dataCryptos: Crypto[] = useAppSelector(
    (state: RootState) => state.cryptos.cryptos,
  );
  return (
    <SafeAreaView>
      <CryptoList
        data={dataCryptos}
        keyExtractor={(item: Crypto) => item.id}
        renderItem={({ item }: { item: Crypto }) => <ViewCrypto item={item} />}
      />
      <BtnAdd>
        <TextBtn> + Add a Cryptocurrency </TextBtn>
      </BtnAdd>
    </SafeAreaView>
  );
};

export default Home;
