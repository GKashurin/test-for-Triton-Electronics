const initialState = {
	cats: [],
	isLoaded: false,
};

const cats = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CATS':
			return {
				...state,
				cats: action.payload,
				isLoaded: true,
			};

		case 'SET_LOADED':
			return {
				...state,
				isLoaded: action.payload,
			};

		default:
			return state;
	}
};

export default cats;