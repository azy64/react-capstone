import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer, { fetchCountries } from './countries/countriesReducer';
import continentsReducer, { fetchContinents } from './continents/continentsReducer';

const reducer = combineReducers({
  countriesReducer,
  continentsReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(fetchContinents());
store.dispatch(fetchCountries());
export default store;
