import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import ActionTypes from './constants';
import { setAlbums } from './actions';

import request from 'utils/request';

export function* getAlbumsData(data: any) {
  const headers = {
    method: 'GET',
  };
  const id = data.payload;
  const requestURL = `https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/artists/${id}/albums`;

  try {
    const resp = yield call(request, requestURL, headers);

    const albums = resp.filter(item => item.artist === +id);
    yield put(setAlbums(albums[0].albums));
  } catch (err) {
    console.error(err);
  }
}

export default function* coursesSaga() {
  yield all([takeLatest(ActionTypes.GET_ALBUMS, getAlbumsData)]);
}
