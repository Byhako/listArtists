import { action } from 'typesafe-actions';
// import { } from './types';

import ActionTypes from './constants';

export const getArtists = () => action(ActionTypes.GET_ARTISTS);
export const setArtists = (data: object[]) => action(ActionTypes.SET_ARTISTS, data);
