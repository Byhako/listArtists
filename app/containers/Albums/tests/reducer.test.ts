import albumsReducer from '../reducer';
// import { someAction } from '../actions';
import { ContainerState } from '../types';

describe('albumsReducer', () => {
  let state: ContainerState;
  beforeEach(() => {
    state = {
      albums: [],
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(albumsReducer(undefined, {} as any)).toEqual(expectedResult);
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
