/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import ActionTypes from 'containers/App/constants';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  // try {
  //   // Call our request helper (see 'utils/request')
  //   const repos = yield call(request, requestURL);
  //   yield put(reposLoaded(repos, username));
  // } catch (err) {
  //   yield put(repoLoadingError(err));
  // }
}

// Individual exports for testing
export default function* coursesSaga() {
  yield all([takeLatest(ActionTypes.LOAD_REPOS, getRepos)]);
}
