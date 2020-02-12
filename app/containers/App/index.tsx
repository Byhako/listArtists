import * as React from 'react';
import styled from 'styles/styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  height: 100vh;
  padding: 0;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
