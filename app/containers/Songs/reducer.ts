/*
 *
 * Songs reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  album: {},
  listSongs: [],
};

function songsReducer(state: ContainerState = initialState, action: ContainerActions): ContainerState {
  switch (action.type) {
    case ActionTypes.SET_SONGS:
      return {
        listSongs: action.payload,
        album: state.album,
      };
    case ActionTypes.SET_ALBUM:
      return {
        listSongs: state.listSongs,
        album: action.payload,
      };
    default:
      return state;
  }
}

export default songsReducer;
