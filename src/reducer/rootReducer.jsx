import { combineReducers } from 'redux';
import contactReducer from './contactReducer.jsx';
import msgReducer from './msgReducer.jsx';
import nicknameReducer from './nicknameReducer';

const rootReducer = combineReducers({
    contact: contactReducer,
    msg: msgReducer,
    nickName: nicknameReducer
});

export default rootReducer;