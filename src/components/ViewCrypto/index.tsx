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
          {
            <ImgArrow
              source={item.dollar_percentage_change > 0 ? ArrowGreen : ArrowRed}
            />
          }
          <ChangeText value={item.dollar_percentage_change}>
            {item.dollar_percentage_change}%
          </ChangeText>
        </ChangeContainer>
      </Data>
    </DataConteiner>
  </ViewConteiner>
);

export default ViewCrypto;
