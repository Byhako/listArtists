import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface AlbumsState {
  readonly albums: object[];
}


/* --- ACTIONS --- */
type AlbumsActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = AlbumsState;
type ContainerActions = AlbumsActions;

export { RootState, ContainerState, ContainerActions };
