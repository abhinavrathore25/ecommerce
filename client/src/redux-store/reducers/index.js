import { combineReducers } from 'redux';
import { isLoggedInReducer } from './isLoggedInReducer';

const reducers = combineReducers({
    isLoggedIn: isLoggedInReducer
});

export default reducers;