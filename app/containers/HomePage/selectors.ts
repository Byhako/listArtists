import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

const selectHome = (state: ApplicationRootState) => {
  return state.home || initialState;
};

const makeSelectHome = () =>
  createSelector(selectHome, substate => {
    return substate;
  });

export { selectHome, makeSelectHome };
