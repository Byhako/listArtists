/**
 * Test the HomePage
 */

import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import * as appActions from 'containers/App/actions';
import configureStore from '../../../configureStore';
import HomePage from '../index';
import { initialState } from '../reducer';
import history from '../../../utils/history';

jest.mock('containers/App/actions');

const renderHomePage = store =>
  render(
    // tslint:disable-next-line: jsx-wrap-multiline
    <Provider store={store}>
      <HomePage />
    </Provider>,
  );

describe('<HomePage />', () => {
  let store;
  const mockedLoadRepos = appActions.load as jest.Mock;

  beforeAll(() => {
    // loadRepos is mocked so that we can spy on it but also so that it doesn't trigger a network request
    mockedLoadRepos.mockImplementation(() => ({ type: '' }));
  });

  beforeEach(() => {
    store = configureStore({}, history);
    mockedLoadRepos.mockClear();
  });

  afterEach(cleanup);

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderHomePage(store);
    expect(firstChild).toMatchSnapshot();
  });

  it('shouldn`t fetch repos on mount (if username is empty)', () => {
    renderHomePage(store);
    expect(appActions.load).not.toHaveBeenCalled();
  });

  it('shouldn`t fetch repos if the form is submitted when the username is empty', () => {
    const { container } = renderHomePage(store);

    const form = container.querySelector('form')!;
    fireEvent.submit(form);

    expect(appActions.load).not.toHaveBeenCalled();
  });

  it('should fetch repos if the form is submitted when the username isn`t empty', () => {
    const { container } = renderHomePage(store);

    const input = container.querySelector('input')!;
    fireEvent.change(input, { target: { value: 'julienben' } });
    expect(appActions.load).not.toHaveBeenCalled();

    const form = container.querySelector('form')!;
    fireEvent.submit(form);
    expect(appActions.load).toHaveBeenCalled();
  });
});
