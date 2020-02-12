/**
 * Test the HomePage
 */

import React from 'react';
import { render } from '@testing-library/react';

import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <HomePage />,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
