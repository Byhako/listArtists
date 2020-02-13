/*
 *
 * Albums reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  albums: [],
};

function albumsReducer(state: ContainerState = initialState, action: ContainerActions): ContainerState {
  switch (action.type) {
    case ActionTypes.SET_ALBUMS:
      return {
        albums: action.payload,
      };
    default:
      return state;
  }
}

export default albumsReducer;
