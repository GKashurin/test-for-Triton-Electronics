import { combineReducers } from 'redux';
import cats from "./catsReducer"
import cart from "./cartReducer"

const rootReducer = combineReducers({
	cats,
	cart
});

export default rootReducer;