import React, { useEffect } from 'react';
import { BtnAdd, TextBtn, CryptoList } from './styles';
import { SafeAreaView } from 'react-native';
import { useAppSelector } from '../../Hooks/hooksState';
import ViewCrypto from '../../components/ViewCrypto';
import { RootState } from '../../store';
import { Crypto } from '../../interface';
import { useAppDispatch } from '../../Hooks/hooksState';
import { updateCrypto } from '../../store/actions';

const Home = ({ navigation }): JSX.Element => {
  const dispatch = useAppDispatch();
  const dataCryptos: Crypto[] = useAppSelector(
    (state: RootState) => state.cryptos.cryptos
  );

  const handleUpdate = () => {
    if (dataCryptos.length > 0) {
      dispatch(updateCrypto());
    }
  };

  useEffect(() => {
    const intervalUpdate = setInterval(() => handleUpdate(), 3000);
    intervalUpdate;
    return () => {
      clearInterval(intervalUpdate);
    };
  });

  const renderItem = ({ item }) => <ViewCrypto item={item} />;

  return (
    <SafeAreaView>
      <CryptoList
        data={dataCryptos}
        keyExtractor={({ Asset }) => Asset.id}
        renderItem={renderItem}
      />
      <BtnAdd onPress={() => navigation.navigate('AddCrypto')}>
        <TextBtn> + Add a Cryptocurrency </TextBtn>
      </BtnAdd>
    </SafeAreaView>
  );
};

export default Home;
