import { action } from 'typesafe-actions';

import { getAlbums } from '../actions';
import ActionTypes from '../constants';

describe('Albums actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = action(ActionTypes.GET_ALBUMS);
      expect(getAlbums(1)).toEqual(expected);
    });
  });
});
