import { API_URL } from 'react-native-dotenv';

export const ADD_CRYPTOS = 'ADD_CRYPTOS';

export const addCryptos: Function = () => {
  return async dispatch => {
    try {
      const res = await fetch(API_URL);
      const resJson = await res.json();
      dispatch({ type: ADD_CRYPTOS, payload: resJson.data });
    } catch (error) {
      console.log(error);
    }
  };
};
