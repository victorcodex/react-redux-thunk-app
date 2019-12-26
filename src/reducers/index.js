import counterReducer from './counter';
import userInfo from './userInfo';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userInfo
});

export default rootReducer;