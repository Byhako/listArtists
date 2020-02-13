import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectSongsDomain = (state: ApplicationRootState) => {
  return state.songs || initialState;
};

const makeSelectSongs = () =>
  createSelector(selectSongsDomain, substate => {
    return substate;
  });

export default makeSelectSongs;
export { selectSongsDomain };
