import React from 'react';
import { Alert } from 'react-native';
import ArrowGreen from '../../assets/arrow_Green.png';
import ArrowRed from '../../assets/arrow_Red.png';
import { useAppDispatch } from '../../Hooks/hooksState';
import { Crypto } from '../../interface/index';
import { deleteCrypto } from '../../store/actions';
import {
  ViewConteiner,
  TextTitle,
  DataConteiner,
  LogoCrypto,
  CodeCrypto,
  ChangeContainer,
  ImgArrow,
  Data,
  ChangeText,
  DeleteCrypto,
} from './styles';

const ViewCrypto = ({ item }: { item: Crypto }): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    Alert.alert('', '¿Do you want to delete this cryptocurrency?', [
      { text: 'No', style: 'cancel' },
      {
        text: 'Delete',
        onPress: () => {
          dispatch(deleteCrypto(item.Asset.id));
        },
      },
    ]);
  };

  return (
    <DeleteCrypto onPress={handleDelete}>
      <ViewConteiner>
        <LogoCrypto
          source={{
            uri: `https://asset-images.messari.io/images/${item.Asset.id}/32.png?v=2`,
          }}
        />
        <DataConteiner>
          <Data>
            <TextTitle>{item.Asset.name}</TextTitle>
            <TextTitle>${item.market_data.price_usd.toFixed(2)}</TextTitle>
          </Data>
          <Data>
            <CodeCrypto>{item.Asset.symbol}</CodeCrypto>
            <ChangeContainer>
              {
                <ImgArrow
                  source={
                    item.market_data.percent_change_usd_last_24_hours > 0
                      ? ArrowGreen
                      : ArrowRed
                  }
                />
              }
              <ChangeText
                value={item.market_data.percent_change_usd_last_24_hours}>
                {Math.abs(
                  item.market_data.percent_change_usd_last_24_hours
                ).toFixed(2)}
                %
              </ChangeText>
            </ChangeContainer>
          </Data>
        </DataConteiner>
      </ViewConteiner>
    </DeleteCrypto>
  );
};

export default ViewCrypto;
