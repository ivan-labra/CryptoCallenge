import React from 'react';
import ArrowGreen from '../../assets/arrow_Green.png';
import ArrowRed from '../../assets/arrow_Red.png';
import { Crypto } from '../../interface/index';
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
} from './styles';

const ViewCrypto = ({ item }: { item: Crypto }): JSX.Element => (
  <ViewConteiner>
    <LogoCrypto
      source={{
        uri: `https://messari.io/asset-images/${item.id}/32.png`,
      }}
    />
    <DataConteiner>
      <Data>
        <TextTitle>{item.name}</TextTitle>
        <TextTitle>${item.metrics.market_data.price_usd.toFixed(2)}</TextTitle>
      </Data>
      <Data>
        <CodeCrypto>{item.symbol}</CodeCrypto>
        <ChangeContainer>
          {
            <ImgArrow
              source={
                item.metrics.market_data.percent_change_usd_last_24_hours > 0
                  ? ArrowGreen
                  : ArrowRed
              }
            />
          }
          <ChangeText
            value={item.metrics.market_data.percent_change_usd_last_24_hours}>
            {Math.abs(
              item.metrics.market_data.percent_change_usd_last_24_hours
            ).toFixed(2)}
            %
          </ChangeText>
        </ChangeContainer>
      </Data>
    </DataConteiner>
  </ViewConteiner>
);

export default ViewCrypto;
