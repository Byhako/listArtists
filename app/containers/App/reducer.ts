import { ContainerState, ContainerActions } from './types';
import ActionTypes from './constants';

// The initial state of the App
export const initialState: ContainerState = {
  loading: false,
  widthWindow: 0,
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function appReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOAD:
      return {
        loading: action.payload,
        widthWindow: state.widthWindow,
      };
    case ActionTypes.RESIZE:
      return {
        loading: false,
        widthWindow: action.payload,
      };
    default:
      return state;
  }
}

export default appReducer;
