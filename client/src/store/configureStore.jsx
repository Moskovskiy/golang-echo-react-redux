import { createStore, combineReducers, applyMiddleware } from 'redux';
import fromReducer from '../reducers/app';
import thunkMiddleware from 'redux-thunk';

/* Storeの実装 */

export default function configureStore(){
  return createStore(
    fromReducer,applyMiddleware(thunkMiddleware)
  );
}
