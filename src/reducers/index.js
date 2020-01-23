import { combineReducers } from 'redux';
import user from './auth_reducer';
import userLists from './user_reducer';
const rootReducer = combineReducers({
    user,
    userLists
});

export default rootReducer;