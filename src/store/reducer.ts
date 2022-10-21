import { ADD_CRYPTO } from './actions';

const initialState = {
	cryptos: [
		{
			id: 1,
			name: 'Bitcoin',
			symbol: 'BTC',
			srcLogo:
				'https://res.cloudinary.com/dwflhw6kg/image/upload/v1666185669/Bitcoin-Free-PNG-Image_pvhlqb.png',
			price: 7.21508,
			dollar_percentage_change: 1.82,
		},
		{
			id: 2,
			name: 'Etherium',
			symbol: 'ETH',
			srcLogo:
				'https://res.cloudinary.com/dwflhw6kg/image/upload/v1666185581/ETHEREUM-YOUTUBE-PROFILE-PIC_c4kzu9.png',
			price: 146.83,
			dollar_percentage_change: 1.46,
		},
		{
			id: 3,
			name: 'XRP',
			symbol: 'XRP',
			srcLogo:
				'https://res.cloudinary.com/dwflhw6kg/image/upload/v1666185171/xrp-xrp-logo_tht40c_bsjsqn.png',
			price: 0.220568,
			dollar_percentage_change: -2.47,
		},
	],
};

export default (
	state = initialState,
	action: { type: string; payload: any[] },
) => {
	switch (action.type) {
		case ADD_CRYPTO:
			return {
				...state,
				cryptos: [...state.cryptos, ...action.payload],
			};
		default:
			return state;
	}
};
