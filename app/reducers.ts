/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import appReducer from 'containers/App/reducer';
import homeReducer from 'containers/HomePage/reducer';
import albumsReducer from 'containers/Albums/reducer';


/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    app: appReducer,
    home: homeReducer,
    albums: albumsReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
