import { ADD_CRYPTO } from './actions';

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
    default:
      return state;
  }
};
