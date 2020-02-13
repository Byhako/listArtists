import songsReducer from '../reducer';
// import { someAction } from '../actions';
import { ContainerState } from '../types';

describe('songsReducer', () => {
  let state: ContainerState;
  beforeEach(() => {
    state = {
      album: {},
      listSongs: [],
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(songsReducer(undefined, {} as any)).toEqual(expectedResult);
  });

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = {
   *     loading = true;
   *   );
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
});
