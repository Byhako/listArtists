import { action } from 'typesafe-actions';
import ActionTypes from './constants';

export const getAlbums = (id: number) => action(ActionTypes.GET_ALBUMS, id);
export const setAlbums = (data: object[]) => action(ActionTypes.SET_ALBUMS, data);
