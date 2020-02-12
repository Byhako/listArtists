import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

// The initial state of the App
export const initialState: ContainerState = {
  artists: [],
};

function homeReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.SET_ARTISTS:
      return {
        artists: action.payload,
      };
    default:
      return state;
  }
}

export default homeReducer;
