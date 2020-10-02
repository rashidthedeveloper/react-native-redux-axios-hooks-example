import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import apiReducer from './ApiReducer';

const appReducers = combineReducers({
  apiReducer,
});

const rootReducer = (state, action) => appReducers(state, action);

const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
