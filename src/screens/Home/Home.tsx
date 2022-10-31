import React from "react";
import { BtnAdd, TextBtn, CryptoList } from "./styles";
import { SafeAreaView } from "react-native";
import { useAppSelector } from "../../Hooks/hooksState";
import ViewCrypto from "../../components/ViewCrypto";
import { RootState } from "../../store";
import { Crypto } from "../../interface";

const Home = (): JSX.Element => {
  const dataCryptos: Crypto[] = useAppSelector(
    (state: RootState) => state.cryptos.cryptos
  );
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
