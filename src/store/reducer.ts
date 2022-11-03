import { ADD_CRYPTOS } from './actions';

const initialState = {
  cryptos: [],
};

export default (
  state = initialState,
  action: { type: string; payload: any[] }
) => {
  switch (action.type) {
    case ADD_CRYPTOS:
      return {
        ...state,
        cryptos: action.payload,
      };
    default:
      return state;
  }
};
