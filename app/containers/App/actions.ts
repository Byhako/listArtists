import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const load = (state: boolean) => action(ActionTypes.LOAD, state);
export const resize = (size: number) => action(ActionTypes.RESIZE, size);
