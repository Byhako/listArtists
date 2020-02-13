import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface SongsState {
  readonly album: object;
  readonly listSongs: object[];
}


/* --- ACTIONS --- */
type SongsActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = SongsState;
type ContainerActions = SongsActions;

export { RootState, ContainerState, ContainerActions };
