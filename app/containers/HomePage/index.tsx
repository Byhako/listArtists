import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectLoading } from 'containers/App/selectors';
import { getArtists } from './actions';
import { makeSelectHome } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { ContentHome, FooterHome } from './styledComponents';

const stateSelector = createStructuredSelector({
  dataHome: makeSelectHome(),
  loading: makeSelectLoading(),
});

export default function HomePage() {
  useInjectReducer({ key: 'home', reducer: reducer });
  useInjectSaga({ key: 'home', saga: saga });
  const dispatch = useDispatch();
  const { dataHome: { artists } } = useSelector(stateSelector);

  console.log(artists);

  useEffect(() => {
    dispatch(getArtists());
  }, []);

  return (
    <ContentHome>

      <FooterHome />
    </ContentHome>
  );
}
