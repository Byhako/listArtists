/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';

const selectGlobal = (state: ApplicationRootState) => {
  return state.global;
};

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.loading);

export {
  selectGlobal,
  makeSelectLoading,
};
