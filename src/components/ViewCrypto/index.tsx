import React from 'react';
import Arrow_green from '../../assets/arrow_Green.png';
import Arrow_red from '../../assets/arrow_Red.png';
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
        uri: `${item.srcLogo}`,
      }}
    />
    <DataConteiner>
      <Data>
        <TextTitle>{item.name}</TextTitle>
        <TextTitle>${item.price}</TextTitle>
      </Data>
      <Data>
        <CodeCrypto>{item.symbol}</CodeCrypto>
        <ChangeContainer>
          {item.dollar_percentage_change > 0 ? (
            <ImgArrow source={Arrow_green} />
          ) : (
            <ImgArrow source={Arrow_red} />
          )}
          <ChangeText value={item.dollar_percentage_change}>
            {item.dollar_percentage_change}%
          </ChangeText>
        </ChangeContainer>
      </Data>
    </DataConteiner>
  </ViewConteiner>
);

export default ViewCrypto;
