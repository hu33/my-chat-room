import { combineReducers } from 'redux';
import contactReducer from './contactReducer.jsx';
import msgReducer from './msgReducer.jsx';
import nicknameReducer from './nicknameReducer';

const rootReducer = combineReducers({
    contactList: contactReducer,
    msgList: msgReducer,
    nickName: nicknameReducer
});

export default rootReducer;