import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const loadRepos = () => action(ActionTypes.LOAD_REPOS);
