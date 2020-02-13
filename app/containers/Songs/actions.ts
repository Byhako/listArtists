import { action } from 'typesafe-actions';
import ActionTypes from './constants';

export const getSongs = (id: number) => action(ActionTypes.GET_SONGS, id);
export const setSongs = (data: object[]) => action(ActionTypes.SET_SONGS, data);
export const setAlbum = (data: object) => action(ActionTypes.SET_ALBUM, data);
