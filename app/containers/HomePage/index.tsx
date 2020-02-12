/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectError, makeSelectLoading } from 'containers/App/selectors';
// import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { ContentHome, FooterHome } from './styledComponents';

const stateSelector = createStructuredSelector({
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default function HomePage() {
  const { username, loading, error } = useSelector(stateSelector);

  const dispatch = useDispatch();

  // const onChangeUsername = (evt: any) => dispatch(changeUsername(evt.target.value));

  useInjectReducer({ key: 'home', reducer: reducer });
  useInjectSaga({ key: 'home', saga: saga });

  return (
    <ContentHome>

      <FooterHome />
    </ContentHome>
  );
}
