import { ADD_CRYPTO, DELETE_CRYPTO, UPDATE_CRYPTO } from './actions';

const initialState = {
  cryptos: [],
};

export default (
  state = initialState,
  action: { type: string; payload: any[] }
) => {
  switch (action.type) {
    case ADD_CRYPTO:
      return {
        ...state,
        cryptos: [...state.cryptos, action.payload],
      };
    case DELETE_CRYPTO:
      return {
        ...state,
        cryptos: [...state.cryptos.filter(e => e.Asset.id !== action.payload)],
      };
    case UPDATE_CRYPTO:
      return {
        ...state,
        cryptos: action.payload,
      };
    default:
      return state;
  }
};
