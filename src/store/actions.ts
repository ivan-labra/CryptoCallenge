import { BASE_URL } from 'react-native-dotenv';
import { Crypto } from '../interface/index';

import { Alert } from 'react-native';

export const ADD_CRYPTO = 'ADD_CRYPTO';

export const addCrypto: Function = (nameOrSymbol: string, array: Crypto[]) => {
  return async dispatch => {
    try {
      const res = await fetch(
        `${BASE_URL}assets/${nameOrSymbol}/metrics/market-data`
      );
      const resJson = await res.json();

      if (res.ok) {
        const verify = array.find(e => e.Asset.id === resJson.data.Asset.id);
        if (!verify) {
          dispatch({ type: ADD_CRYPTO, payload: resJson.data });
        } else {
          Alert.alert('Error', 'You already have this cryptocurrency');
        }
      } else {
        Alert.alert('Error', 'You misspelled the name of the cryptocurrency.');
      }
    } catch (error) {
      console.error(error);
    }
  };
};
