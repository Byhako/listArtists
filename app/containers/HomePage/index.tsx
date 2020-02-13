import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { getArtists } from './actions';
import { makeSelectHome } from './selectors';
import { makeSelectApp } from '../App/selectors';
import saga from './saga';
import { ContentHome, WrappArtists, FooterHome, Artist, ContentArtist } from './styledComponents';

const stateSelector = createStructuredSelector({
  dataHome: makeSelectHome(),
  dataApp: makeSelectApp(),
});

export default function HomePage() {
  useInjectSaga({ key: 'home', saga: saga });
  const dispatch = useDispatch();
  const { dataHome: { artists }, dataApp: { widthWindow } } = useSelector(stateSelector);
  const size = widthWindow/8;

  console.log(artists);

  useEffect(() => {
    dispatch(getArtists());
  }, []);

  return (
    <ContentHome>
      <WrappArtists>
        {artists.map((item: any) => (
          <ContentArtist key={item.id} style={{height: size, width: size}}>
            <Artist>

            </Artist>
          </ContentArtist>
        ))}
      </WrappArtists>
      <FooterHome />
    </ContentHome>
  );
}