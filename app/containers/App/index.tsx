import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Albums from 'containers/Albums/Loadable';
import Songs from 'containers/Songs/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

import { makeSelectApp } from './selectors';
import { resize } from './actions';

import GlobalStyle from '../../global-styles';
import { AppWrapper, GlobalContainer } from './styledComponents';

const stateSelector = createStructuredSelector({
  dataApp: makeSelectApp(),
});

export default function App() {
  const dispatch = useDispatch();
  const { dataApp: { widthWindow } } = useSelector(stateSelector);

  useEffect(() => {
    dispatch(resize(window.innerWidth));
  }, []);

  window.onresize = () => dispatch(resize(window.innerWidth));

  return (
    <AppWrapper>
      <GlobalContainer style={{ height: `${widthWindow * 0.48}px`}}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/artists/:id" component={Albums} />
          <Route exact path="/album/:id" component={Songs} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </GlobalContainer>
      <GlobalStyle />
    </AppWrapper>
  );
}
