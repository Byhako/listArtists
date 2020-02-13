import { action } from 'typesafe-actions';
import ActionTypes from './constants';

export const getAlbums = id => action(ActionTypes.GET_ALBUMS, id);
export const setAlbums = data => action(ActionTypes.SET_ALBUMS, data);
