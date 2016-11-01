import { createStore } from 'redux';
import changeColorApp from '../reducers/reducers';

let store = createStore(changeColorApp);

export default store;
