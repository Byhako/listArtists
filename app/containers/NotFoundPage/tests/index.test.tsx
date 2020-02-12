/**
 * Testing the NotFoundPage
 */

import React from 'react';
import { render } from '@testing-library/react';

import NotFound from '../index';

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const { queryByText } = render(
      // tslint:disable-next-line: jsx-wrap-multiline
      <NotFound />,
    );
    expect(queryByText('Erro in NotFound')).toBeInTheDocument();
  });
});
