import { API_URL } from 'react-native-dotenv';
import { Crypto } from '../interface/index';
export const ADD_CRYPTOS = 'ADD_CRYPTOS';

export const addCryptos: Function = () => {
  return async (
    dispacht: (arg0: { type: string; payload: Crypto[] }) => void
  ) => {
    try {
      const res = await fetch(API_URL);
      const resJson = await res.json();
      dispacht({ type: ADD_CRYPTOS, payload: resJson.data });
    } catch (error) {
      console.log(error);
    }
  };
};
