import { combineReducers, createStore, compose } from 'redux';
import appReducer from './Items';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const reducers = combineReducers({app: appReducer});
const store = createStore(reducers);

type IndexReducerType = typeof reducers;
export type AppState = ReturnType<IndexReducerType>;
export type AppDispatch = typeof store.dispatch;

export default store;