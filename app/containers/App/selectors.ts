/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

const selectGlobal = (state: ApplicationRootState) => {
  return state.app || initialState;
};

const makeSelectApp = () =>
  createSelector(selectGlobal, substate => {
    return substate;
  });

export {
  selectGlobal,
  makeSelectApp,
};
