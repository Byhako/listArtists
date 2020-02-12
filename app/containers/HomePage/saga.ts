/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import ActionTypes from './constants';
import { setArtists } from './actions';

import request from 'utils/request';

export function* getArtistsData() {
  const headers = {
    method: 'GET',
  };

  const requestURL = 'https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/artists';

  try {
    const resp = yield call(request, requestURL, headers);
    yield put(setArtists(resp));
  } catch (err) {
      console.error(err);
  }
}

export default function* coursesSaga() {
  yield all([takeLatest(ActionTypes.GET_ARTISTS, getArtistsData)]);
}
