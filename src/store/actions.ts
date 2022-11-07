import { BASE_URL } from 'react-native-dotenv';
import { Crypto } from '../interface/index';

import { Alert } from 'react-native';

export const ADD_CRYPTO = 'ADD_CRYPTO';
export const DELETE_CRYPTO = 'DELETE_CRYPTO';
export const UPDATE_CRYPTO = 'UPDATE_CRYPTO';

export const addCrypto: Function = (
  nameOrSymbol: string,
  currentList: Crypto[]
) => {
  return async dispatch => {
    try {
      const res = await fetch(
        `${BASE_URL}assets/${nameOrSymbol}/metrics/market-data`
      );
      const resJson = await res.json();

      if (res.ok) {
        const verify = currentList.find(
          e => e.Asset.id === resJson.data.Asset.id
        );
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

export const deleteCrypto = (id: string) => {
  return dispatch => {
    try {
      dispatch({ type: DELETE_CRYPTO, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCrypto = (currentList: Crypto[]) => {
  return async dispatch => {
    try {
      const res = await fetch(
        'https://data.messari.io/api/v2/assets?fields=id,metrics/market_data'
      );
      const resJson = await res.json();

      const newList = currentList.map(e => {
        resJson.data.map(update => {
          if (update.id === e.Asset.id) {
            return (e.market_data = update.metrics.market_data);
          }
        });
        return e;
      });

      dispatch({ type: UPDATE_CRYPTO, payload: newList });
    } catch (error) {
      console.log(error);
    }
  };
};
