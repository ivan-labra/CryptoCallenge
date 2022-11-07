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
      const newList = state.cryptos.map(e => {
        action.payload.data.map(update => {
          if (update.id === e.Asset.id) {
            return (e.market_data = update.metrics.market_data);
          }
        });
        return e;
      });
      return {
        ...state,
        cryptos: newList,
      };
    default:
      return state;
  }
};
