import { action } from 'typesafe-actions';

import { getSongs } from '../actions';
import ActionTypes from '../constants';

describe('Songs actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = action(ActionTypes.GET_SONGS);
      expect(getSongs(1)).toEqual(expected);
    });
  });
});
