import { call, put, takeLatest, all } from 'redux-saga/effects';
import ActionTypes from './constants';
import { setSongs } from './actions';

import request from 'utils/request';

export function* getSongsData(data: any) {
  const headers = {
    method: 'GET',
  };
  const id = data.payload;
  const requestURL = `https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/albums/${id}/songs`;

  try {
    const resp = yield call(request, requestURL, headers);
    const albums = resp.filter(item => item.album === +id);
    if (albums.length) {
      yield put(setSongs(albums[0].songs));
    } else {
      yield put(setSongs([{no_songs: 'no_songs'}]));
    }
  } catch (err) {
    console.error(err);
  }
}

export default function* coursesSaga() {
  yield all([takeLatest(ActionTypes.GET_SONGS, getSongsData)]);
}
