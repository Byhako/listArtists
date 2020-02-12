import { ContainerState, ContainerActions } from './types';
import ActionTypes from './constants';

// The initial state of the App
export const initialState: ContainerState = {
  loading: false,
  error: false,
  currentUser: '',
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function appReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOAD_REPOS:
      return {
        currentUser: state.currentUser,
        loading: true,
        error: false,
      };
    // case ActionTypes.LOAD_REPOS_ERROR:
    //   const { error, loading, ...rest } = state;
    //   return {
    //     error: action.payload,
    //     loading: false,
    //     ...rest,
    //   };
    default:
      return state;
  }
}

export default appReducer;
