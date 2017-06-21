import { createStore } from 'redux';
import rootReducer from '../reducer/rootReducer.jsx';

let store = createStore(rootReducer);

export default store;