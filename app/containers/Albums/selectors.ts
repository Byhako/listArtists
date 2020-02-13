import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

const selectAlbumsDomain = (state: ApplicationRootState) => {
  return state.albums || initialState;
};

const makeSelectAlbums = () =>
  createSelector(selectAlbumsDomain, substate => {
    return substate;
  });

export default makeSelectAlbums;
export { selectAlbumsDomain };
