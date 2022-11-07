import { ADD_CRYPTO, DELETE_CRYPTO, UPDATE_CURRENCIES } from './actions';

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
    case UPDATE_CURRENCIES:
      const { data } = action.payload;
      const cryptoCurrencieUpdater = state.cryptos.map(crypto => {
        data.map(updateCurrency => {
          if (updateCurrency.id === crypto.Asset.id) {
            return (crypto.market_data = updateCurrency.metrics.market_data);
          }
        });
        return crypto;
      });
      return {
        ...state,
        cryptos: cryptoCurrencieUpdater,
      };
    default:
      return state;
  }
};
